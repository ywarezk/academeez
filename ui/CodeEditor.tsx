'use client';

import {CodeEditor as CE, SandpackProvider} from '@codesandbox/sandpack-react';
// import {FC} from 'react';

type CodeEditorProps = typeof CE.defaultProps;

export const CodeEditor = (props: CodeEditorProps) => {
  return (
    <SandpackProvider>
      <CE {...(props as any)} />
    </SandpackProvider>
  );
};
