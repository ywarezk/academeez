/**
 * Play video button
 *
 * Created March 28th, 2022
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';


export const ButtonPlay: FC<IconButtonProps> = ({
  sx = [],
  ...props
}) => {
  return (
    <IconButton
      sx={[
        {
          color: 'background.paper',
          '&:hover': {
            color: 'primary.main'
          }
        }
      ]}
      {...props}
    >
      <PlayCircleFilled sx={sx} />
    </IconButton>
  )
}
