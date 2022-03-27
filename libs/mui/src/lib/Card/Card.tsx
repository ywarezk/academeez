/**
 * Custom styles for material card component
 *
 * Created March 25th, 2022
 * @author: ywarezk
 * @version: 0.4.0
 * @license: MIT
 */

import { FC } from "react";
import MuiCard, { CardProps } from '@mui/material/Card';

export const Card: FC<CardProps> = ({
  sx = [],
  ...props
}) => {
  return (
    <MuiCard
      sx={[
        {
          borderRadius: 0
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  )
}
