import { describe, it } from 'mocha'

import {
  getLanguageByBokmaalName,
  getLanguageByEnglishName,
  getLanguageByIso6391Code,
  getLanguageByIso6392Code,
  getLanguageByIso6393Code, getLanguageByIso6395Code,
  getLanguageByNynorskName,
  getLanguageBySamiName,
  getLanguageByUri
} from '../LanguageMapper.mjs'
import {
  ALL_LANGUAGES,
  BOKMAAL,
  ENGLISH,
  GERMAN,
  MULTIPLE,
  NYNORSK,
  UNDEFINED_LANGUAGE,
  SAMI_LANGUAGES
} from '../LanguageConstants.mjs'
import chai from 'chai'

const expect = chai.expect

describe('String values exist', () => {
  it('should return expected URI', () => {
    ALL_LANGUAGES.forEach(language => {
      if (language.iso6393Code !== null) {
        expect(language.uri).to.contain('http://lexvo.org/id/iso639-3/' + language.iso6393Code)
      } else {
        expect(language.uri).to.contain('http://lexvo.org/id/iso639-5/' + language.iso6395Code)
      }
    }
    )
  })

  it('should return English when input is valid', () => {
    expect(getLanguageByIso6391Code('en')).to.equal(ENGLISH)
    expect(getLanguageByIso6392Code('eng')).to.equal(ENGLISH)
    expect(getLanguageByIso6393Code('eng')).to.equal(ENGLISH)
    expect(getLanguageByEnglishName('english')).to.equal(ENGLISH)
    expect(getLanguageByBokmaalName('engelsk')).to.equal(ENGLISH)
    expect(getLanguageByNynorskName('engelsk')).to.equal(ENGLISH)
    expect(getLanguageBySamiName('eaŋgalsgiella')).to.equal(ENGLISH)
  })

  it('should return German when input is ISO 639-2 variant', () => {
    ['deu', 'ger'].forEach(variant => {
      expect(getLanguageByIso6392Code(variant)).to.equal(GERMAN)
    })
  })

  it('should return Bokmål when input is Norwegian', () => {
    expect(getLanguageByIso6391Code('no')).to.equal(BOKMAAL)
    expect(getLanguageByIso6392Code('nor')).to.equal(BOKMAAL)
    expect(getLanguageByIso6393Code('nor')).to.equal(BOKMAAL)
    expect(getLanguageByEnglishName('norwegian')).to.equal(BOKMAAL)
    expect(getLanguageByBokmaalName('norsk')).to.equal(BOKMAAL)
    expect(getLanguageByNynorskName('norsk')).to.equal(BOKMAAL)
    expect(getLanguageBySamiName('dárogiella')).to.equal(BOKMAAL)
  })

  it('should return Undefined language when input is ISO 639-1 Unknown', () => {
    expect(getLanguageByIso6391Code('øl')).to.equal(UNDEFINED_LANGUAGE)
  })

  it('should return Undefined language when input is ISO 639-1 empty', () => {
    [null, '', '  ', '\t', '\r\n'].forEach(input => {
      expect(getLanguageByIso6391Code(input)).to.equal(UNDEFINED_LANGUAGE)
    })
  })

  it('should return language when input is valid URI', () => {
    expect(getLanguageByUri('http://lexvo.org/id/iso639-3/eng')).to.equal(ENGLISH)
  })

  it('should return undefined when input is unknown URI', () => {
    expect(getLanguageByUri('http://example.org/spambot')).to.equal(UNDEFINED_LANGUAGE)
  })

  it('should return Multiple Languages when input is Miscellaneous Languages', () => {
    expect(getLanguageByIso6392Code('mis')).to.equal(MULTIPLE)
    expect(getLanguageByUri('http://lexvo.org/id/iso639-3/mis')).to.equal(MULTIPLE)
    expect(getLanguageByEnglishName('Miscellaneous Language')).to.equal(MULTIPLE)
    expect(getLanguageByBokmaalName('annet språk')).to.equal(MULTIPLE)
    expect(getLanguageByNynorskName('anna språk')).to.equal(MULTIPLE)
  })

  it('should return Norwegian written standard when  input is one of the possible representations', () => {
    const cases = [
      { nob: 'Norsk (bokmål)', nno: 'Norsk (bokmål)', eng: 'Norwegian (bokmål)', sme: 'Dárogiella (girjedárogiella)', expected: BOKMAAL },
      { nob: 'Norsk, nynorsk', nno: 'Norsk, nynorsk', eng: 'Norwegian, nynorsk', sme: 'Dárogiella, ođđadárogiella', expected: NYNORSK },
      { nob: 'Samisk språk', nno: 'Samisk språk', eng: 'Sami languages', sme: 'Sámegielat', expected: SAMI_LANGUAGES }
    ]
    cases.forEach(item => expect(getLanguageByBokmaalName(item.nob)).to.equal(item.expected))
    cases.forEach(item => expect(getLanguageByNynorskName(item.nno)).to.equal(item.expected))
    cases.forEach(item => expect(getLanguageByEnglishName(item.eng)).to.equal(item.expected))
    cases.forEach(item => expect(getLanguageBySamiName(item.sme)).to.equal(item.expected))
  })

  it('should return sami language group when input is iso 639-5', () => {
    expect(getLanguageByIso6395Code('smi')).equal(SAMI_LANGUAGES)
  })
})
