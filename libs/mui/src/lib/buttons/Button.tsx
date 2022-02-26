/**
 * This is the base button, All buttons will extend this
 *
 * Created April 19th, 2021
 * Updated February 19th, 2022
 *
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import MuiButton, {
  ButtonProps as MuiButtonProps
} from '@mui/material/Button';
import { SystemStyleObject } from '@mui/system';
import { FC } from 'react';

type ButtonColor = MuiButtonProps['color'] | 'dark' | 'light'

type ButtonProps = Omit<MuiButtonProps, 'color'> & { color?: ButtonColor };

export const Button: FC<ButtonProps> = ({
  sx = [],
  variant = 'contained',
  color = 'primary',
  ...props
}) => {

  let dynamicStyles: SystemStyleObject = {}
  if (color === 'primary' && variant === 'contained') {
    dynamicStyles = {
      color: 'grey.50',
      bgColor: 'primary.main',
      '&:hover': { bgcolor: 'primary.500', boxShadow: 0 },
    }
  }

  if (variant === 'outlined' && color === 'primary') {
    dynamicStyles = {
      color: 'primary.main',
      borderColor: 'primary.main',
      '&:hover': {
        color: 'primary.dark',
        borderColor: 'primary.dark',
        bgcolor: 'transparent',
        boxShadow: 0
      }
    }
  }

  if (color === 'dark' && variant === 'contained') {
    dynamicStyles = {
      bgcolor: 'secondary.main',
      color: 'grey.500',
      '&:hover': {
        bgcolor: 'grey.200',
        boxShadow: 0
      }
    }
  }

  if (color === 'dark' && variant === 'outlined') {
    dynamicStyles = {
      bgcolor: 'transparent',
      color: 'grey.100',
      borderColor: 'grey.100',
      '&:hover': {
        color: 'grey.200',
        bgcolor: 'transparent',
        borderColor: 'grey.200',
        boxShadow: 0
      }
    }
  }

  if ( variant === 'outlined' ) {
    (dynamicStyles as any)['bgcolor'] = 'transparent';
    (dynamicStyles as any)['border'] = 1;
  }

  return (
    <MuiButton
      sx={[
        {
          boxShadow: 0,
          textTransform: 'none',
          px: 2,
          py: 1.75,
        },
        dynamicStyles,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      { ...props }
    />
  )
}
