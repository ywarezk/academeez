/**
 * Utilit functions
 *
 * Created September 25th, 2023
 * @author ywarezk
 * @license MIT
 * @version 0.0.3
 */

import {clsx, type ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
