/**
 * Different types we have in the theme
 *
 * Created February 5th, 2022
 * @author: ywarezk
 * @copyright: Nerdeez LTD
 * @version: 0.0.1
 */

export type ColorName =
  | 'dark800'
  | 'dark700'
  | 'gray200'
  | 'green'
  | 'greenHover'
  | 'greenHover2'
  | 'white'
  | 'red'
  | 'gray300';

export interface Theme {
  colors: { [key in ColorName]: string };
  fonts: {
    spaceMono: string;
    radioGrotesk: string;
  };
}

export type Paddings =
  | '0'
  | '0.5rem'
  | '0.75rem'
  | '1rem'
  | '2.5rem'
  | '3rem'
  | '4rem'
  | '5rem'

export type Direction =
  | 'Top'
  | 'Bottom'
  | 'Right'
  | 'Left'
  | ''

export type PaddingMargin =
  | 'padding'
  | 'margin'
