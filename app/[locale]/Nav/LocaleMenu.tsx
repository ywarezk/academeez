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
import Link from 'next/link'
import {fromLocaleToDropdownDir} from '@/lib'
import {useLocale, useTranslations} from 'next-intl'

export const LocaleMenu: FC = () => {
  const t = useTranslations('Nav')
  const locale = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <GlobeIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={fromLocaleToDropdownDir(locale)}>
        <DropdownMenuItem>
          <Link href="/en" locale="en">
            {t('en')}
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link href="/he" locale="he">
            {t('he')}
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
