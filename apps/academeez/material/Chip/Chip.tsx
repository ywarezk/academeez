/**
 * Designing the mui chip
 *
 * Created May 15th, 2021
 * @author: ywarezk
 * @copyright: yellowHEAD LTD
 * @version: 0.0.1
 */

import MuiChip from '@material-ui/core/Chip';
import styled from 'styled-components';

export const Chip = styled(MuiChip)`

  && {
    background-color: ${ ({theme}) => theme.colors.gray300 };
    border-radius: 4px;
    padding-left: 0.313rem;
    padding-right: 0.313rem;
    padding-top: 0.188rem;
    padding-bottom: 0.188rem;
    height: auto;

    .MuiChip-label {
      padding: 0;
      font-size: 0.75rem;
      font-family: ${ ({theme}) => theme.fonts.radioGrotesk};
      font-weight: 400;
    }

    .MuiChip-icon {
      height: 1.2rem;
      margin-left: 0;
      margin-right: 0.313rem;
    }
  }
`

