/**
 * Custom style AppBar
 *
 * Created March 4th, 2022
 * @author: ywarezk
 * @version: 0.1.0
 * @license: MIT
 */

import { FC } from 'react';
import MuiAppBar, { AppBarProps } from '@mui/material/AppBar';
import { SystemStyleObject } from '@mui/system';

export const AppBar: FC<AppBarProps> = ({
  sx = {},
  ...props
}) => {
  const customStyles: SystemStyleObject = {
    boxShadow: 0
  }

  return (
    <MuiAppBar
      sx={[
        customStyles,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  )
}
