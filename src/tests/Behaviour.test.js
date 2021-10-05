'use strict'

const mocha = require('mocha')
const LanguageMapper = require('../LanguageMapper')
const constants = require('../LanguageConstants')
const { ALL_LANGUAGES } = require('../LanguageConstants')
const expect = require('chai').expect
const describe = mocha.describe
const it = mocha.it

describe('String values exist', () => {
  it('should return expected URI"', () => {
    ALL_LANGUAGES.forEach(language =>
      expect(language.uri).to.equal('http://lexvo.org/id/iso639-3/' + language.iso6393Code)
    )
  })

  it('should return English when input is valid', () => {
    expect(LanguageMapper.getLanguageByIso6391Code('en')).to.equal(constants.ENGLISH)
    expect(LanguageMapper.getLanguageByIso6392Code('eng')).to.equal(constants.ENGLISH)
    expect(LanguageMapper.getLanguageByIso6393Code('eng')).to.equal(constants.ENGLISH)
    expect(LanguageMapper.getLanguageByEnglishName('english')).to.equal(constants.ENGLISH)
    expect(LanguageMapper.getLanguageByBokmaalName('engelsk')).to.equal(constants.ENGLISH)
    expect(LanguageMapper.getLanguageByNynorskName('engelsk')).to.equal(constants.ENGLISH)
    expect(LanguageMapper.getLanguageBySamiName('eaŋgalsgiella')).to.equal(constants.ENGLISH)
  })

  it('should return German when input is ISO 639-2 variant', () => {
    ['deu', 'ger'].forEach(variant => {
      expect(LanguageMapper.getLanguageByIso6392Code(variant)).to.equal(constants.GERMAN)
    })
  })

  it('should return Bokmål when input is Norwegian', () => {
    expect(LanguageMapper.getLanguageByIso6391Code('no')).to.equal(constants.BOKMAAL)
    expect(LanguageMapper.getLanguageByIso6392Code('nor')).to.equal(constants.BOKMAAL)
    expect(LanguageMapper.getLanguageByIso6393Code('nor')).to.equal(constants.BOKMAAL)
    expect(LanguageMapper.getLanguageByEnglishName('norwegian')).to.equal(constants.BOKMAAL)
    expect(LanguageMapper.getLanguageByBokmaalName('norsk')).to.equal(constants.BOKMAAL)
    expect(LanguageMapper.getLanguageByNynorskName('norsk')).to.equal(constants.BOKMAAL)
    expect(LanguageMapper.getLanguageBySamiName('dárogiella')).to.equal(constants.BOKMAAL)
  })

  it('should return Undefined language when input is ISO 639-1 Unknown', () => {
    expect(LanguageMapper.getLanguageByIso6391Code('øl')).to.equal(constants.UNDEFINED_LANGUAGE)
  })

  it('should return Undefined language when input is ISO 639-1 empty', () => {
    [null, '', '  ', '\t', '\r\n'].forEach(input => {
      expect(LanguageMapper.getLanguageByIso6391Code(input)).to.equal(constants.UNDEFINED_LANGUAGE)
    })
  })
})
