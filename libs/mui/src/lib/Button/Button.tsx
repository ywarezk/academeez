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
import { FC, forwardRef } from 'react';

type ButtonColor = MuiButtonProps['color'] | 'dark' | 'light'

export type ButtonProps = Omit<MuiButtonProps, 'color'> & { color?: ButtonColor };

export const Button: FC<ButtonProps> = forwardRef(({
  sx = [],
  variant = 'contained',
  color = 'primary',
  ...props
}, ref) => {
  let dynamicStyles: SystemStyleObject = {}

  if (variant === 'outlined') {
    dynamicStyles = {
      ...dynamicStyles,
      bgcolor: 'transparent',
      border: 1
    }
  }

  if (color === 'primary' && variant === 'contained') {
    dynamicStyles = {
      ...dynamicStyles,
      color: 'grey.50',
      bgColor: 'primary.main',
      '&:hover': { bgcolor: 'primary.500', boxShadow: 0 },
    }
  }

  if (variant === 'outlined' && color === 'primary') {
    dynamicStyles = {
      ...dynamicStyles,
      color: 'primary.main',
      borderColor: 'primary.main',
      '&:hover': {
        boxShadow: 0,
        color: 'primary.dark',
        borderColor: 'primary.dark',
        bgcolor: 'transparent',
      }
    }
  }

  if (color === 'dark' && variant === 'contained') {
    dynamicStyles = {
      ...dynamicStyles,
      bgcolor: 'secondary.main',
      color: 'grey.500',
      '&:hover': {
        boxShadow: 0,
        bgcolor: 'grey.200',
      }
    }
  }

  if (color === 'dark' && variant === 'outlined') {
    dynamicStyles = {
      ...dynamicStyles,
      bgcolor: 'transparent',
      color: 'grey.100',
      borderColor: 'grey.100',
      '&:hover': {
        boxShadow: 0,
        color: 'grey.200',
        bgcolor: 'transparent',
        borderColor: 'grey.200',
      }
    }
  }

  if (color === 'light' && variant === 'outlined') {
    dynamicStyles = {
      ...dynamicStyles,
      bgcolor: 'transparent',
      color: 'background.paper',
      borderColor: 'background.paper',
      '&:hover': {
        boxShadow: 0,
        color: 'grey.400',
        bgcolor: 'transparent',
        borderColor: 'grey.400',
      }
    }
  }

  return (
    <MuiButton
      ref={ref}
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
      {...props}
    />
  )
})
