'use strict'

import { ALL_LANGUAGES, UNDEFINED_LANGUAGE, BOKMAAL, NORWEGIAN } from './LanguageConstants.mjs'
const convertString = string => string !== null ? string.trim().toLowerCase() : ''

const mappedValue = language => {
  if (language === null || language === undefined) {
    return UNDEFINED_LANGUAGE
  }
  if (NORWEGIAN === language) {
    return BOKMAAL
  }
  return language
}

const getLanguageByIso6391Code = code => mappedValue(
  ALL_LANGUAGES.find(language => convertString(code).match(language.iso6391Code))
)

const getLanguageByIso6392Code = code => mappedValue(
  ALL_LANGUAGES.find(language => language.iso6392Codes.find(variant => convertString(code).match(variant)))
)

const getLanguageByIso6393Code = code => mappedValue(
  ALL_LANGUAGES.find(language => convertString(code).match(language.iso6393Code))
)

const getLanguageByEnglishName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name).match(new RegExp(language.eng.toLowerCase())))
)

const getLanguageByBokmaalName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name).match(new RegExp(language.nob.toLowerCase())))
)

const getLanguageByNynorskName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name).match(new RegExp(language.nno.toLowerCase())))
)

const getLanguageBySamiName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name).match(new RegExp(language.sme.toLowerCase())))
)

export {
  getLanguageByIso6391Code,
  getLanguageByIso6392Code,
  getLanguageByIso6393Code,
  getLanguageByEnglishName,
  getLanguageByBokmaalName,
  getLanguageByNynorskName,
  getLanguageBySamiName
}
