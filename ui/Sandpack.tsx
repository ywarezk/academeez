'use client';

import {Sandpack as SandpackExternal, SandpackProps} from '@codesandbox/sandpack-react';
import {FC} from 'react';

export const Sandpack: FC<SandpackProps> = props => {
  return <SandpackExternal {...props} />;
};
