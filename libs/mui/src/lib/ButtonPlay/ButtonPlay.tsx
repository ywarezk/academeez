/**
 * Play video button
 *
 * Created March 28th, 2022
 * @author: ywarezk
 * @version: 0.5.0
 * @license: MIT
 */

import { FC, forwardRef } from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';

export const ButtonPlay: FC<IconButtonProps & { fontSize?: number }> = forwardRef(({
  sx = [],
  fontSize,
  ...props
}, ref) => {
  return (
    <IconButton
      ref={ref}
      sx={[
        {
          color: 'background.paper',
          '&:hover': {
            color: 'primary.main'
          }
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    >
      <PlayCircleFilled sx={fontSize ? { fontSize } : {}} />
    </IconButton>
  )
})
