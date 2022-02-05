/**
 * Button to pop the video player
 *
 * Created April 17th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import { FC } from 'react';
import { ButtonProps } from '../Button';
import { IconButton } from './PlayButton.markup';
import PlayArrow from '@mui/icons-material/PlayArrow';

export const PlayButton: FC<Omit<ButtonProps, 'color'>> = (props) => {
  return (
    <IconButton
      variant="contained"
      color="dark800"
      startIcon={<PlayArrow />}
      {...props}
    />
  );
};
