'use client';

import ReactTextareaAutosize from 'react-textarea-autosize';
import styles from '../css/WriteForm.module.css';
import { useRouter } from 'next/navigation';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import writePost, { WritePostProp } from '@/utils/writePost';

interface Props {
  title: string;
  updateTitle: (title: string) => void;
  content: string;
  updateContent: (content: string) => void;
  tags: string[];
  updateTags: (newTag: string) => void;
  type: string;
  _id?: string;
}

export default function WriteForm({
  title,
  updateTitle,
  content,
  updateContent,
  tags,
  updateTags,
  type,
  _id,
}: Props) {
  const [currentTag, setCurrentTag] = useState((tags ?? []).join(' ')); // 초기값은 tags에 들어있는 값들을 공백으로 합쳐서 string으로 넣어줌
  const router = useRouter();
  const queryClient = useQueryClient();
  const handleCancelClick = () => {
    router.back();
  };

  const onChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateTitle(e.target.value);
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateContent(e.target.value);
  };

  const onChangeTag = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrentTag(e.target.value);
  };

  useEffect(() => {
    updateTags(currentTag);
  }, [currentTag]);

  // eslint-disable-next-line
  const handleSetTab = (e: any) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const val = e.target.value;
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      e.target.value = val.substring(0, start) + '\t' + val.substring(end);
      e.target.selectionStart = e.target.selectionEnd = start + 1;
      onChangeContent(e);
      return false;
    }
  };

  const uploadPostMutation = useMutation({
    mutationFn: (writePostProp: WritePostProp) => writePost(writePostProp),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['post-list'] });
      queryClient.invalidateQueries({ queryKey: ['tag-list'] });
    },
  });

  const handlePostSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const writePostProp: WritePostProp = {
      post_id: _id,
      title: title,
      content: content,
      tags: tags,
      type: type,
    };
    uploadPostMutation.mutate(writePostProp, {
      onSuccess: (data) => {
        router.push(`/post/${data.post_id}`);
        if (type === 'edit') {
          router.refresh();
        }
      },
    });
  };

  // input 태그에서 Enter 입력 시 submit 방지
  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => e.preventDefault()}
    >
      <textarea
        name='title'
        placeholder='제목을 작성해주세요.'
        className={styles.input_title}
        required
        value={title}
        onChange={onChangeTitle}
        maxLength={40}
      />
      <input
        name='tags'
        className={styles.input_tags}
        placeholder='태그를 입력해주세요. 공백으로 구분됩니다.'
        value={currentTag}
        onChange={onChangeTag}
        onKeyDown={(e) => handleTagKeyDown(e)}
      />
      <hr className={styles.separator} />
      <label
        htmlFor='content'
        className={styles.content_label}
      >
        <ReactTextareaAutosize
          id='content'
          name='content'
          placeholder='Markdown 문법을 지원합니다.'
          className={styles.input_content}
          minRows={3}
          maxLength={6000}
          maxRows={26}
          required
          value={content}
          onChange={onChangeContent}
          onKeyDown={(e) => handleSetTab(e)}
        />
      </label>
      <div className={styles.button_area}>
        <button
          type='button'
          className={styles.cancel_button}
          onClick={handleCancelClick}
        >
          취소
        </button>
        <button
          disabled={!title || !content || uploadPostMutation.isPending}
          className={styles.submit_button}
          onClick={handlePostSubmit}
        >
          저장하기
        </button>
      </div>
    </form>
  );
}
