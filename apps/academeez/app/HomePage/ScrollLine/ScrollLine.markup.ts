/**
 * design of the scroll line
 *
 * Created April 21st, 2021
 * @author: ywarezk
 * @version: 0.0.1
 * @license: MIT
 */

import styled from 'styled-components';

export const ScrollLineWrapper = styled.div`
  & {
    position: absolute;
    bottom: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  & .line{
    border-left: 2px solid white;
    height: 5rem;
    margin-top: 2rem;
  }
`
