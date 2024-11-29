import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from './CodeBlock';
import styles from './MarkdownView.module.css';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

interface Props {
  content: string;
}

const customSchema = {
  ...defaultSchema,
  tagNames:
    defaultSchema.tagNames?.filter(
      (tag) =>
        ![
          'iframe',
          'script',
          'object',
          'embed',
          'form',
          'link',
          'style',
        ].includes(tag)
    ) || [],
};

export default function MarkdownView({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw, [rehypeSanitize, customSchema]]}
      components={{
        //pre: MarkdownHeader,
        code: CodeBlock,
        img: ({ ...props }) => (
          <img
            style={{ maxWidth: '100%' }}
            {...props}
            alt=''
          />
        ),
      }}
      className={styles.markdown}
    >
      {content}
    </Markdown>
  );
}
