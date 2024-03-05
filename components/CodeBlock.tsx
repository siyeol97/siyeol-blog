import { getCurrentLanguage } from '@/utils/getLanguage';
import { ClassAttributes, HTMLAttributes } from 'react';
import { ExtraProps } from 'react-markdown';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock(
  props: ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement> & ExtraProps
) {
  const currentLanguage = getCurrentLanguage(
    props.className?.replace('language-', '')
  );

  if (!currentLanguage) return <code {...props} />;
  return (
    <SyntaxHighlighter
      language={currentLanguage}
      showLineNumbers={true}
      style={oneDark}
    >
      {String(props.children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  );
}
