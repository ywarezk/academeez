/**
 * pop a dialog
 *
 * Created April 23rd, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import styled, { css } from 'styled-components';
import MuiDialog, { DialogProps as MuiDialogProps} from '@material-ui/core/Dialog';
import { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const StyledDialog = styled(({fullScreen, ...props}) => <MuiDialog {...props} />)`
  && {
    .MuiDialog-paper {
      overflow: visible;
      ${props => {
        if (props.fullScreen) {
          return css`
            height: calc(100% - 64px);
          `
        }
      }}
    }

    .close-wrapper {
      position: absolute;
      right: -25px;
      border-radius: 50%;
      border: 3px solid;
      background: white;
      top: -24px;
    }

    .MuiDialogContent-root {
    }
  }
`

type DialogProps = MuiDialogProps & { isCloseButton? : boolean}

export const Dialog: FC<DialogProps> = ({
  isCloseButton = false,
  children,
  ...props
}) => {

  return (
    <StyledDialog  {...props}>
      {
        isCloseButton && (
            <div className="close-wrapper">
            <IconButton onClick={(event) => props.onClose && props.onClose(event, 'backdropClick')}>
                <CloseIcon />
              </IconButton>
            </div>
        )
      }
      {
        children
      }
    </StyledDialog>
  )
}
