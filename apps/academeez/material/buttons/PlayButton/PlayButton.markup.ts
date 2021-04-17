/**
 * Styling the  play button
 *
 * Created April 17th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import MuiPlayCircleOutline from '@material-ui/icons/PlayCircleFilled';
import { FC } from 'react';
import styled from 'styled-components';

export const PlayCircleOutline: FC<any> = styled(MuiPlayCircleOutline)`
  && {
    font-size: ${props => { console.log(props); return props.fontSize } }
  }
`
