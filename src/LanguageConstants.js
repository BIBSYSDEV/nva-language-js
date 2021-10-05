'use strict'

const Language = require('./Language')

const ENGLISH = new Language('en', ['eng'], 'eng', 'English', 'Engelsk', 'Engelsk', 'Eaŋgalsgiella')
const BOKMAAL = new Language('nb', ['nob'], 'nob', 'Bokmål', 'Bokmål', 'Bokmål', 'Girjedárogiella')
const NYNORSK = new Language('nn', ['nno'], 'nno', 'Nynorsk', 'Nynorsk', 'Nynorsk', 'Ođđadárogiella')
const SAMI = new Language('se', [], 'sme', 'Sami', 'Samisk', 'Samisk', 'Davvisámegiella')
const FRENCH = new Language('fr', ['fra', 'fre'], 'fra', 'French', 'Fransk', 'Fransk', 'Fránskkagiella')
const GERMAN = new Language('de', ['deu', 'ger'], 'deu', 'German', 'Tysk', 'Tysk', 'Duiskkagiella')
const DUTCH = new Language('nl', ['nld', 'dut'], 'nld', 'Dutch', 'Nederlandsk', 'Nederlandsk', 'Hollánddagiella')
const DANISH = new Language('da', ['dan'], 'dan', 'Danish', 'Dansk', 'Dansk', 'Dánskkagiella')
const FINNISH = new Language('fi', ['fin'], 'fin', 'Finnish', 'Finsk', 'Finsk', 'Suomagiella')
const ICELANDIC = new Language('is', ['isl', 'ice'], 'isl', 'Icelandic', 'Islandsk', 'Islandsk', 'Islánddagiella')
const ITALIAN = new Language('it', ['ita'], 'ita', 'Italian', 'Italiensk', 'Italiensk', 'Itáliagiella')
const NORWEGIAN = new Language('no', ['nor'], 'nor', 'Norwegian', 'Norsk', 'Norsk', 'Dárogiella')
const PORTUGUESE = new Language('pt', ['por'], 'por', 'Portuguese', 'Portugisisk', 'Portugisisk', 'Portugálagiella')
const RUSSIAN = new Language('ru', ['rus'], 'rus', 'Russian', 'Russisk', 'Russisk', 'Ruoššagiella')
const SPANISH = new Language('es', ['spa'], 'spa', 'Spanish', 'Spansk', 'Spansk', 'Spánskkagiella')
const SWEDISH = new Language('sv', ['swe'], 'swe', 'Swedish', 'Svensk', 'Svensk', 'Ruoŧagiella')
const MULTIPLE = new Language(null, ['mul'], 'mul', 'Multiple languages', 'Flere språk', 'Fleire språk', 'gielat')
const AFRIKAANS = new Language('af', ['afr'], 'afr', 'Afrikaans', 'Afrikaans', 'Afrikaans', 'Afrikánsagiella')
const BULGARIAN = new Language('bg', ['bul'], 'bul', 'Bulgarian', 'Bulgarsk', 'Bulgarsk', 'Bulgáriagiella')
const GREEK = new Language('el', ['gre', 'ell'], 'ell', 'Greek', 'Gresk', 'Gresk', 'Greikkagiella')
const CATALAN = new Language('ca', ['cat'], 'car', 'Catalan', 'Katalansk', 'Katalansk', 'Katalánagiella')
const CHINESE = new Language('zh', ['zho', 'chi'], 'zho', 'Chinese', 'Kinesisk', 'Kinesisk', 'Kiinnágiella')
const POLISH = new Language('pl', ['pol'], 'pol', 'Polish', 'Polsk', 'Polsk', 'Polskkagiella')
const CZECH = new Language('cs', ['ces', 'cze'], 'ces', 'Czech', 'Tsjekkisk', 'Tsjekkisk', 'Čeahkagiella')
const HUNGARIAN = new Language('hu', ['hun'], 'hun', 'Hungarian', 'Ungarsk', 'Ungarsk', 'Ungárgiella')
const UNDEFINED_LANGUAGE = new Language(null, ['und'], 'und', 'Unknown language', 'Ukjent språk', 'Ukjent språk', 'Dovdameahttun giella')

const ALL_LANGUAGES = Object.freeze([
  ENGLISH,
  BOKMAAL,
  NYNORSK,
  SAMI,
  FRENCH,
  GERMAN,
  DUTCH,
  DANISH,
  FINNISH,
  ICELANDIC,
  ITALIAN,
  NORWEGIAN,
  PORTUGUESE,
  RUSSIAN,
  SPANISH,
  SWEDISH,
  MULTIPLE,
  UNDEFINED_LANGUAGE,
  AFRIKAANS,
  BULGARIAN,
  GREEK,
  CATALAN,
  CHINESE,
  POLISH,
  CZECH,
  HUNGARIAN
])

module.exports = {
  ALL_LANGUAGES,
  ENGLISH,
  BOKMAAL,
  NYNORSK,
  SAMI,
  FRENCH,
  GERMAN,
  DUTCH,
  DANISH,
  FINNISH,
  ICELANDIC,
  ITALIAN,
  NORWEGIAN,
  PORTUGUESE,
  RUSSIAN,
  SPANISH,
  SWEDISH,
  MULTIPLE,
  UNDEFINED_LANGUAGE,
  AFRIKAANS,
  BULGARIAN,
  GREEK,
  CATALAN,
  CHINESE,
  POLISH,
  CZECH,
  HUNGARIAN
}
