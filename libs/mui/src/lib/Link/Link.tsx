/**
 * redesigning material link to match academeez design
 *
 * Created March 19th, 2022
 * @author: ywarezk
 * @version: 0.3.0
 * @license: MIT
 */

import { FC, forwardRef } from 'react'
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link'

export type LinkProps = MuiLinkProps & { isActive?: boolean }

export const Link: FC<LinkProps> = forwardRef(
  ({ isActive = false, sx = [], ...props }, ref) => {
    return (
      <MuiLink
        ref={ref}
        color={isActive ? 'primary.main' : 'background.paper'}
        underline="none"
        sx={[
          {
            fontFamily: 'Space Mono',
            fontSize: '0.875rem',
            cursor: 'pointer',
            '&:hover': {
              color: 'primary.main',
            },
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...props}
      />
    )
  }
)
