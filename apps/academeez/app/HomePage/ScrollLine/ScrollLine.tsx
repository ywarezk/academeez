/**
 * Simple scroll line in the hero section
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { Typography } from "@academeez/az/material";
import { FC } from "react";
import { ScrollLineWrapper } from './ScrollLine.markup';

export const ScrollLine: FC = () => {
  return (
    <ScrollLineWrapper>
      <div>
        <Typography variant="subtitle2">
          Scroll
        </Typography>
      </div>
      <div className="line" />
    </ScrollLineWrapper>
  )
}
