import React from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

type CodeBlockProps = {
  language: string;
  value: string;
};

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => {
  const codeRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (codeRef.current) {
      hljs.highlightBlock(codeRef.current);
    }
  }, [value]);

  return (
    <pre>
      <code ref={codeRef} className={`language-${language}`}>
        {value}
      </code>
    </pre>
  );
};
