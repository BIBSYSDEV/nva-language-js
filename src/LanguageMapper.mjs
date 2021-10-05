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
  ALL_LANGUAGES.find(language => convertString(code) === language.iso6391Code)
)

const getLanguageByIso6392Code = code => mappedValue(
  ALL_LANGUAGES.find(language => language.iso6392Codes.find(variant => convertString(code) === variant))
)

const getLanguageByIso6393Code = code => mappedValue(
  ALL_LANGUAGES.find(language => convertString(code) === language.iso6393Code)
)

const getLanguageByEnglishName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name) === language.eng.toLowerCase())
)

const getLanguageByBokmaalName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name) === language.nob.toLowerCase())
)

const getLanguageByNynorskName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name) === language.nno.toLowerCase())
)

const getLanguageBySamiName = name => mappedValue(
  ALL_LANGUAGES.find(language => convertString(name) === language.sme.toLowerCase())
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
