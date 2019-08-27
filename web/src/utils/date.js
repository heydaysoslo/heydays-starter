import format from 'date-fns/format'
import isValid from 'date-fns/is_valid'

const noLocale = require('date-fns/locale/nb')
const nnLocale = require('date-fns/locale/nn')

const locales = {
  nn_NO: nnLocale,
  nb_NO: noLocale,
  en_US: null
}

export const getFormattedDate = (date, locale) => {
  if (!isValid(new Date(date))) {
    console.warn(`Date ${date} is not valid`)
    return null
  }
  return format(new Date(date), 'd. MMMM-yy', {
    locale: locales[locale] || locales['en_US']
  })
}
