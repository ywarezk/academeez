/**
 * Context used for the layout to pass info for portals
 *
 * Created April 10th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { createContext, RefObject } from 'react';

type LayoutContextContent = {
  header: RefObject<HTMLDivElement>;
};

export const LayoutContext = createContext<LayoutContextContent>({
  header: null,
});
