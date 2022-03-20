/**
 * redesigning material link to match academeez design
 *
 * Created March 19th, 2022
 * @author: ywarezk
 * @version: 0.3.0
 * @license: MIT
 */

import { FC } from "react";
import MuiLink, { LinkProps as MuiLinkProps } from '@mui/material/Link';

export type LinkProps = MuiLinkProps & {isActive?: boolean}

export const Link: FC<LinkProps> = ({
  isActive = false,
  sx = [],
  ...props
}) => {
  return (
    <MuiLink
      color={isActive ? 'primary.main' : "background.paper"}
      underline="none"
      sx={[
        {
          fontFamily: 'Space Mono',
          fontSize: '0.875rem',
          cursor: 'pointer',
          '&:hover': {
            color: 'primary.main'
          }
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...props}
    />
  )
}
