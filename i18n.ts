/**
 * Will grab the proper i18n translation files from the messages folder
 *
 * Created September 26th, 2023
 * @author ywarezk
 * @version 0.0.6
 * @license MIT
 */

import {getRequestConfig} from 'next-intl/server'

export default getRequestConfig(({locale}) => {
  return {
    messages: require(`./messages/${locale}.json`),
  }
})
