import { ClassAttributes, HTMLAttributes, ReactElement } from 'react';

import { ExtraProps } from 'react-markdown';

export default function Pre(
  props: ClassAttributes<HTMLPreElement> &
    HTMLAttributes<HTMLPreElement> &
    ExtraProps
) {
  const language = (props?.children as ReactElement)?.props?.className?.replace(
    'language-',
    ''
  );

  if (!language) return <pre {...props} />;

  return (
    <div>
      <div>
        <span>{language}</span>
      </div>
      {props.children}
    </div>
  );
}
