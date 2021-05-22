/**
 * Styling the course card
 *
 * Created April 30th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import MuiCard from '@material-ui/core/Card';
import styled from 'styled-components';

export const Card = styled(MuiCard)`
  && {
    height: 100%;
    transition: transform 500ms;
    display: flex;
    flex-direction: column;

    .course-intro-player {
      display: none;
    }

    .logo {
      display: block;
      height: 80px;
    }

    &.showVideo {
      .course-intro-player {
        display: block;
      }

      .logo {
        display: none;
      }
    }

    .description {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      min-height: 46px;
    }

    .video-react-control-bar, .video-react-big-play-button {
      display: none;
    }

    &:hover {
      transform: scaleY(1.25) scaleX(1.4);
      z-index: 1;

      .description {
        -webkit-line-clamp: initial;
      }
    }

    .MuiCardMedia-root {
      min-height: 170px;
      justify-content: center;
      align-items: center;
      display: flex;
    }

    .MuiCardContent-root {
      padding-bottom: 0;
      flex-grow: 1;
    }
  }
`
