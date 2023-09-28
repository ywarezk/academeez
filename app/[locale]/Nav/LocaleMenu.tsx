/**
 * This component will display a localization menu
 *
 * Created September 28th, 2023
 * @author ywarezk
 * @version 0.0.7
 * @license MIT
 */

import {FC} from 'react'
import {DropdownMenu, DropdownMenuTrigger, Button, DropdownMenuContent, DropdownMenuItem} from '@/ui'
import {GlobeIcon} from '@radix-ui/react-icons'
import Link from 'next-intl/link'

export const LocaleMenu: FC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <GlobeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem>
          <Link href="/" locale="en">
            English
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" locale="he">
            Hebrew
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
