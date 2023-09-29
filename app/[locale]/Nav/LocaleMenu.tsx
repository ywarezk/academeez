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
import {type SupportedLocales, fromLocaleToDropdownDir} from '@/lib'
import {useTranslations} from 'next-intl'

export const LocaleMenu: FC<{locale: SupportedLocales}> = ({locale}) => {
  const t = useTranslations('Nav')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <GlobeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={fromLocaleToDropdownDir(locale)}>
        <DropdownMenuItem>
          <Link href="/" locale="en">
            {t('en')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/" locale="he">
            {t('he')}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
