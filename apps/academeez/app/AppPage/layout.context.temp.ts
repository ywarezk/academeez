/**
 * Delete me!
 */

import { createContext, RefObject } from 'react';

type LayoutContextContent = {
  header: RefObject<HTMLDivElement>;
};

export const LayoutContext = createContext<LayoutContextContent>({
  header: null,
});
