/**
 * Styles for the homepage
 *
 * Created April 16th, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import styled from 'styled-components';
import bg from './bg.png';

export const HeroSection = styled.section`
  & {
    height: 80vh;
    max-height: 1300px;
    min-height: 500px;

    background-color: black;
    position: relative;
    display: flex;
    justify-content: center;
  }

  & .MuiGrid-container {
    height: 100%;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
`

export const HeroBgImg = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  background-image: url(${bg});
  z-index: 0;
`

export const TopChaptersSection = styled.section`
  && {
    .MuiSvgIcon-root {
      fill: ${prop => prop.theme.colors.red};
      font-size: 3.5rem;
      position: relative;
      top: 11px;
    }
  }
`
