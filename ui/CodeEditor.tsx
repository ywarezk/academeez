'use client';

import {SandpackCodeEditor as CE, SandpackProvider, type SandpackFiles} from '@codesandbox/sandpack-react';

type CodeEditorProps = typeof CE.defaultProps;

export const CodeEditor = ({files, ...props}: CodeEditorProps & {files: SandpackFiles}) => {
  return (
    <SandpackProvider theme={'light'} files={files}>
      <CE {...(props as any)} />
    </SandpackProvider>
  );
};
