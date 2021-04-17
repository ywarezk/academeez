/**
 * Button to pop the video player
 *
 * Created April 17th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import { FC } from 'react';
import { PlayCircleOutline } from './PlayButton.markup';

export const PlayButton: FC<IconButtonProps & {fontSize?: string}> = (props) => {
  return (
    <div>
      <IconButton {...props}>
        <PlayCircleOutline fontSize={props.fontSize} />
      </IconButton>
    </div>
  )
}


