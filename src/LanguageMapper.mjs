import { ALL_LANGUAGES, UNDEFINED_LANGUAGE, BOKMAAL, NORWEGIAN, MISCELLANEOUS, MULTIPLE } from './LanguageConstants.mjs'

const convertString = string => string !== null ? string.trim().toLowerCase() : ''

const replaceNorwegian = language => NORWEGIAN === language ? BOKMAAL : language
const replaceMiscellaneous = language => MISCELLANEOUS === language ? MULTIPLE : language

const stripNonAZ = string => string.replaceAll(/[^a-zæøå]+/g, '')
const isSameNaturalLanguageString = (a, b) => stripNonAZ(convertString(a)) === stripNonAZ(convertString(b))

const mappedValue = language => {
  return (language === null || language === undefined)
    ? UNDEFINED_LANGUAGE
    : replaceNorwegian(replaceMiscellaneous(language))
}

export const getLanguageByIso6391Code = code => mappedValue(
  ALL_LANGUAGES.find(language => convertString(code) === language.iso6391Code)
)

export const getLanguageByIso6392Code = code => mappedValue(
  ALL_LANGUAGES.find(language => language.iso6392Codes.find(variant => convertString(code) === variant))
)

export const getLanguageByIso6393Code = code => mappedValue(
  ALL_LANGUAGES.find(language => convertString(code) === language.iso6393Code)
)

export const getLanguageByEnglishName = name => mappedValue(
  ALL_LANGUAGES.find(language => isSameNaturalLanguageString(language.eng.toLowerCase(), convertString(name)))
)

export const getLanguageByBokmaalName = name => mappedValue(
  ALL_LANGUAGES.find(language => isSameNaturalLanguageString(language.nob.toLowerCase(), convertString(name)))
)

export const getLanguageByNynorskName = name => mappedValue(
  ALL_LANGUAGES.find(language => isSameNaturalLanguageString(language.nno.toLowerCase(), convertString(name)))
)

export const getLanguageBySamiName = name => mappedValue(
  ALL_LANGUAGES.find(language => isSameNaturalLanguageString(language.sme.toLowerCase(), convertString(name)))
)

export const getLanguageByUri = (uri) => mappedValue(
  ALL_LANGUAGES.find(language => convertString(uri) === language.uri)
)
