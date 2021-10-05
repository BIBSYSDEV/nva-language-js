'use strict'

class Language {
  constructor (iso6391Code, iso6392Code, iso6393Code, eng, nob, nno, sme) {
    return {
      uri: 'http://lexvo.org/id/iso639-3/' + iso6393Code,
      iso6391Code: iso6391Code,
      iso6392Codes: iso6392Code,
      iso6393Code: iso6393Code,
      eng: eng,
      nob: nob,
      nno: nno,
      sme: sme
    }
  }
}

module.exports = Language
