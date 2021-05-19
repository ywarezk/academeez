/**
 * Styling the course card
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import MuiCardActionArea from '@material-ui/core/CardActionArea';
import MuiCardActions from '@material-ui/core/CardActions';
import MuiCardContent from '@material-ui/core/CardContent';
import MuiCardMedia from '@material-ui/core/CardMedia';
import MuiCard from '@material-ui/core/Card';
import styled from 'styled-components';

export const Card = styled(MuiCard)`
  && {
    height: 100%;
    transition: transform 500ms;
    position: relative;

    .description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    &:hover {
      transform: scaleY(1.25) scaleX(1.4);
      z-index: 1;

      .description {
        -webkit-line-clamp: initial;
      }
    }
  }
`

export const CardContent = styled(MuiCardContent)`

`

export const CardMedia = styled(MuiCardMedia)`
  && {
    height: 170px;
    justify-content: center;
    align-items: center;
    display: flex;

    img {
      height: 80px;
    }
  }
`

export const CardActionArea = styled(MuiCardActionArea)`

`
