import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import CodeBlock from './CodeBlock';
import styles from './MarkdownView.module.css';

interface Props {
  content: string;
}

export default async function MarkdownView({ content }: Props) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        //pre: MarkdownHeader,
        code: CodeBlock,
      }}
      className={styles.markdown}
    >
      {content}
    </Markdown>
  );
}
