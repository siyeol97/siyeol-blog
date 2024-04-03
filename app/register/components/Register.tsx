'use client';

import Link from 'next/link';
import styles from '../css/Register.module.css';
import MainLogo from '@/components/MainLogo';
import { ChangeHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

interface Form {
  name: string;
  email: string;
  password: string;
}

export default function Register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Form>({
    mode: 'onBlur',
  });

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (response.ok) {
      router.push('/auth/signin');
    }
  };

  const onBlurEmail: ChangeHandler = async (e) => {
    const response = await fetch('/api/auth/check-email', {
      method: 'POST',
      body: JSON.stringify(e.target.value),
    });
    const result = await response.json();
    if (result.length !== 0) {
      setError('email', { message: '중복된 이메일 입니다' });
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <MainLogo />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.form}
        >
          <div className={styles.input_box}>
            <input
              {...register('name', {
                required: '이름을 입력해 주세요',
                pattern: {
                  value:
                    /^[가-힣a-zA-Z](?!.*\s{2})[가-힣a-zA-Z0-9\s]{0,11}[가-힣a-zA-Z0-9]$/i,
                  message: '올바른 형식의 이름이 아닙니다',
                },
              })}
              maxLength={12}
              placeholder='Name *'
              type='text'
              autoFocus
            />
            <p className={styles.error_message}>{errors.name?.message}</p>
          </div>
          <div className={styles.input_box}>
            <input
              {...register('email', {
                required: '이메일을 입력해 주세요',
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                  message: '올바른 이메일 형식이 아닙니다',
                },
                onBlur: onBlurEmail,
              })}
              placeholder='Email *'
              type='email'
              autoComplete='user-name'
            />
            <p className={styles.error_message}>{errors.email?.message}</p>
          </div>
          <div className={styles.input_box}>
            <input
              {...register('password', {
                required: '비밀번호를 입력해 주세요',
                pattern: {
                  value: /^(?=.*[a-zA-Z])(?=.*\d).{8,20}$/,
                  message:
                    '영문, 숫자를 조합해 8자 이상, 20자 이하로 입력해 주세요',
                },
              })}
              placeholder='Password *'
              type='password'
              autoComplete='current-password'
            />
            <p className={styles.error_message}>{errors.password?.message}</p>
          </div>
          <button type='submit'>회원가입 하기</button>
        </form>
        <p className={styles.go_login}>
          이미 회원이세요? <Link href={'/auth/signin'}> 로그인</Link>
        </p>
      </div>
    </section>
  );
}
