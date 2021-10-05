'use strict'

const Language = require('./Language')

const ENGLISH = Language('en', ['eng'], 'eng', 'English', 'Engelsk', 'Engelsk', 'Eaŋgalsgiella')
const BOKMAAL = Language('nb', ['nob'], 'nob', 'Bokmål', 'Bokmål', 'Bokmål', 'Girjedárogiella')
const NYNORSK = Language('nn', ['nno'], 'nno', 'Nynorsk', 'Nynorsk', 'Nynorsk', 'Ođđadárogiella')
const SAMI = Language('se', [], 'sme', 'Sami', 'Samisk', 'Samisk', 'Davvisámegiella')
const FRENCH = Language('fr', ['fra', 'fre'], 'fra', 'French', 'Fransk', 'Fransk', 'Fránskkagiella')
const GERMAN = Language('de', ['deu', 'ger'], 'deu', 'German', 'Tysk', 'Tysk', 'Duiskkagiella')
const DUTCH = Language('nl', ['nld', 'dut'], 'nld', 'Dutch', 'Nederlandsk', 'Nederlandsk', 'Hollánddagiella')
const DANISH = Language('da', ['dan'], 'dan', 'Danish', 'Dansk', 'Dansk', 'Dánskkagiella')
const FINNISH = Language('fi', ['fin'], 'fin', 'Finnish', 'Finsk', 'Finsk', 'Suomagiella')
const ICELANDIC = Language('is', ['isl', 'ice'], 'isl', 'Icelandic', 'Islandsk', 'Islandsk', 'Islánddagiella')
const ITALIAN = Language('it', ['ita'], 'ita', 'Italian', 'Italiensk', 'Italiensk', 'Itáliagiella')
const NORWEGIAN = Language('no', ['nor'], 'nor', 'Norwegian', 'Norsk', 'Norsk', 'Dárogiella')
const PORTUGUESE = Language('pt', ['por'], 'por', 'Portuguese', 'Portugisisk', 'Portugisisk', 'Portugálagiella')
const RUSSIAN = Language('ru', ['rus'], 'rus', 'Russian', 'Russisk', 'Russisk', 'Ruoššagiella')
const SPANISH = Language('es', ['spa'], 'spa', 'Spanish', 'Spansk', 'Spansk', 'Spánskkagiella')
const SWEDISH = Language('sv', ['swe'], 'swe', 'Swedish', 'Svensk', 'Svensk', 'Ruoŧagiella')
const MULTIPLE = Language(null, ['mul'], 'mul', 'Multiple languages', 'Flere språk', 'Fleire språk', 'gielat')
const AFRIKAANS = Language('af', ['afr'], 'afr', 'Afrikaans', 'Afrikaans', 'Afrikaans', 'Afrikánsagiella')
const BULGARIAN = Language('bg', ['bul'], 'bul', 'Bulgarian', 'Bulgarsk', 'Bulgarsk', 'Bulgáriagiella')
const GREEK = Language('el', ['gre', 'ell'], 'ell', 'Greek', 'Gresk', 'Gresk', 'Greikkagiella')
const CATALAN = Language('ca', ['cat'], 'car', 'Catalan', 'Katalansk', 'Katalansk', 'Katalánagiella')
const CHINESE = Language('zh', ['zho', 'chi'], 'zho', 'Chinese', 'Kinesisk', 'Kinesisk', 'Kiinnágiella')
const POLISH = Language('pl', ['pol'], 'pol', 'Polish', 'Polsk', 'Polsk', 'Polskkagiella')
const CZECH = Language('cs', ['ces', 'cze'], 'ces', 'Czech', 'Tsjekkisk', 'Tsjekkisk', 'Čeahkagiella')
const HUNGARIAN = Language('hu', ['hun'], 'hun', 'Hungarian', 'Ungarsk', 'Ungarsk', 'Ungárgiella')
const UNDEFINED_LANGUAGE = Language(null, ['und'], 'und', 'Unknown language', 'Ukjent språk', 'Ukjent språk', 'Dovdameahttun giella')

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
