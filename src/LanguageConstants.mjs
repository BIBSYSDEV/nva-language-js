'use strict'

import Language from './Language.mjs'

export const ENGLISH = Language('en', ['eng'], 'eng', 'English', 'Engelsk', 'Engelsk', 'Eaŋgalsgiella')
export const BOKMAAL = Language('nb', ['nob'], 'nob', 'Bokmål', 'Bokmål', 'Bokmål', 'Girjedárogiella')
export const NYNORSK = Language('nn', ['nno'], 'nno', 'Nynorsk', 'Nynorsk', 'Nynorsk', 'Ođđadárogiella')
export const SAMI = Language('se', [], 'sme', 'Sami', 'Samisk', 'Samisk', 'Davvisámegiella')
export const FRENCH = Language('fr', ['fra', 'fre'], 'fra', 'French', 'Fransk', 'Fransk', 'Fránskkagiella')
export const GERMAN = Language('de', ['deu', 'ger'], 'deu', 'German', 'Tysk', 'Tysk', 'Duiskkagiella')
export const DUTCH = Language('nl', ['nld', 'dut'], 'nld', 'Dutch', 'Nederlandsk', 'Nederlandsk', 'Hollánddagiella')
export const DANISH = Language('da', ['dan'], 'dan', 'Danish', 'Dansk', 'Dansk', 'Dánskkagiella')
export const FINNISH = Language('fi', ['fin'], 'fin', 'Finnish', 'Finsk', 'Finsk', 'Suomagiella')
export const ICELANDIC = Language('is', ['isl', 'ice'], 'isl', 'Icelandic', 'Islandsk', 'Islandsk', 'Islánddagiella')
export const ITALIAN = Language('it', ['ita'], 'ita', 'Italian', 'Italiensk', 'Italiensk', 'Itáliagiella')
export const NORWEGIAN = Language('no', ['nor'], 'nor', 'Norwegian', 'Norsk', 'Norsk', 'Dárogiella')
export const PORTUGUESE = Language('pt', ['por'], 'por', 'Portuguese', 'Portugisisk', 'Portugisisk', 'Portugálagiella')
export const RUSSIAN = Language('ru', ['rus'], 'rus', 'Russian', 'Russisk', 'Russisk', 'Ruoššagiella')
export const SPANISH = Language('es', ['spa'], 'spa', 'Spanish', 'Spansk', 'Spansk', 'Spánskkagiella')
export const SWEDISH = Language('sv', ['swe'], 'swe', 'Swedish', 'Svensk', 'Svensk', 'Ruoŧagiella')
export const MULTIPLE = Language(null, ['mul'], 'mul', 'Multiple languages', 'Flere språk', 'Fleire språk', 'gielat')
export const AFRIKAANS = Language('af', ['afr'], 'afr', 'Afrikaans', 'Afrikaans', 'Afrikaans', 'Afrikánsagiella')
export const BULGARIAN = Language('bg', ['bul'], 'bul', 'Bulgarian', 'Bulgarsk', 'Bulgarsk', 'Bulgáriagiella')
export const GREEK = Language('el', ['gre', 'ell'], 'ell', 'Greek', 'Gresk', 'Gresk', 'Greikkagiella')
export const CATALAN = Language('ca', ['cat'], 'car', 'Catalan', 'Katalansk', 'Katalansk', 'Katalánagiella')
export const CHINESE = Language('zh', ['zho', 'chi'], 'zho', 'Chinese', 'Kinesisk', 'Kinesisk', 'Kiinnágiella')
export const POLISH = Language('pl', ['pol'], 'pol', 'Polish', 'Polsk', 'Polsk', 'Polskkagiella')
export const CZECH = Language('cs', ['ces', 'cze'], 'ces', 'Czech', 'Tsjekkisk', 'Tsjekkisk', 'Čeahkagiella')
export const HUNGARIAN = Language('hu', ['hun'], 'hun', 'Hungarian', 'Ungarsk', 'Ungarsk', 'Ungárgiella')
export const UNDEFINED_LANGUAGE = Language(null, ['und'], 'und', 'Unknown language', 'Ukjent språk', 'Ukjent språk', 'Dovdameahttun giella')

export const ALL_LANGUAGES = Object.freeze([
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
