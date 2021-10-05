'use strict'

import { describe, it } from 'mocha'
import {
  getLanguageByBokmaalName,
  getLanguageByEnglishName,
  getLanguageByIso6391Code,
  getLanguageByIso6392Code,
  getLanguageByIso6393Code, getLanguageByNynorskName, getLanguageBySamiName
} from '../LanguageMapper.mjs'
import { ALL_LANGUAGES, BOKMAAL, ENGLISH, GERMAN, UNDEFINED_LANGUAGE } from '../LanguageConstants.mjs'
import chai from 'chai'
const expect = chai.expect

describe('String values exist', () => {
  it('should return expected URI"', () => {
    ALL_LANGUAGES.forEach(language =>
      expect(language.uri).to.equal('http://lexvo.org/id/iso639-3/' + language.iso6393Code)
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
})
