import Language from './Language.mjs'
import LanguageGroup from "./LanguageGroup.mjs";

export const AFRIKAANS = Language('af', ['afr'], 'afr', 'Afrikaans', 'Afrikaans', 'Afrikaans', 'Afrikánsagiella')
export const BOKMAAL = Language('nb', ['nob'], 'nob', 'Norwegian, bokmål', 'Norsk, bokmål', 'Norsk, bokmål', 'Dárogiella, girjedárogiella')
export const BULGARIAN = Language('bg', ['bul'], 'bul', 'Bulgarian', 'Bulgarsk', 'Bulgarsk', 'Bulgáriagiella')
export const CATALAN = Language('ca', ['cat'], 'car', 'Catalan', 'Katalansk', 'Katalansk', 'Katalánagiella')
export const CHINESE = Language('zh', ['zho', 'chi'], 'zho', 'Chinese', 'Kinesisk', 'Kinesisk', 'Kiinnágiella')
export const CZECH = Language('cs', ['ces', 'cze'], 'ces', 'Czech', 'Tsjekkisk', 'Tsjekkisk', 'Čeahkagiella')
export const DANISH = Language('da', ['dan'], 'dan', 'Danish', 'Dansk', 'Dansk', 'Dánskkagiella')
export const DUTCH = Language('nl', ['nld', 'dut'], 'nld', 'Dutch', 'Nederlandsk', 'Nederlandsk', 'Hollánddagiella')
export const ENGLISH = Language('en', ['eng'], 'eng', 'English', 'Engelsk', 'Engelsk', 'Eaŋgalsgiella')
export const FINNISH = Language('fi', ['fin'], 'fin', 'Finnish', 'Finsk', 'Finsk', 'Suomagiella')
export const FRENCH = Language('fr', ['fra', 'fre'], 'fra', 'French', 'Fransk', 'Fransk', 'Fránskkagiella')
export const GERMAN = Language('de', ['deu', 'ger'], 'deu', 'German', 'Tysk', 'Tysk', 'Duiskkagiella')
export const GREEK = Language('el', ['gre', 'ell'], 'ell', 'Greek', 'Gresk', 'Gresk', 'Greikkagiella')
export const ICELANDIC = Language('is', ['isl', 'ice'], 'isl', 'Icelandic', 'Islandsk', 'Islandsk', 'Islánddagiella')
export const ITALIAN = Language('it', ['ita'], 'ita', 'Italian', 'Italiensk', 'Italiensk', 'Itáliagiella')
export const HUNGARIAN = Language('hu', ['hun'], 'hun', 'Hungarian', 'Ungarsk', 'Ungarsk', 'Ungárgiella')
export const MISCELLANEOUS = Language(null, ['mis'], 'mis', 'Miscellaneous language', 'Annet språk', 'Anna språk')
export const MULTIPLE = Language(null, ['mul'], 'mul', 'Multiple languages', 'Flere språk', 'Fleire språk', 'gielat')
export const NYNORSK = Language('nn', ['nno'], 'nno', 'Norwegian, nynorsk', 'Norsk, nynorsk', 'Norsk, nynorsk', 'Dárogiella, ođđadárogiella')
export const NORWEGIAN = Language('no', ['nor'], 'nor', 'Norwegian', 'Norsk', 'Norsk', 'Dárogiella')
export const POLISH = Language('pl', ['pol'], 'pol', 'Polish', 'Polsk', 'Polsk', 'Polskkagiella')
export const PORTUGUESE = Language('pt', ['por'], 'por', 'Portuguese', 'Portugisisk', 'Portugisisk', 'Portugálagiella')
export const RUSSIAN = Language('ru', ['rus'], 'rus', 'Russian', 'Russisk', 'Russisk', 'Ruoššagiella')
export const SPANISH = Language('es', ['spa'], 'spa', 'Spanish', 'Spansk', 'Spansk', 'Spánskkagiella')
export const NORTHERN_SAMI = Language('se', [], 'sme', 'Northern sami', 'Nordsamisk', 'Nordsamisk', 'Davvisámegiella')
export const SOUTHERN_SAMI = Language(null, [], 'sma', 'Southern sami', 'Sørsamisk', 'Sørsamisk', 'Lullisámegiella')
export const LULE_SAMI = Language(null, [], 'smj', 'Lule sami', 'Lulesamisk', 'Lulesamisk', 'Julevsámegiella')
export const PITE_SAMI = Language(null, [], 'sje', 'Pite sami', 'Pitesamisk', 'Pitesamisk', 'Bihtánsámegiella')
export const SKOLT_SAMI = Language(null, [], 'sms', 'Skolt sami', 'Skoltesamisk', 'Skoltesamisk', 'Nuortasámegiella')
export const ENARE_SAMI = Language(null, [], 'snn', 'Enare sami', 'Enaresamisk', 'Enaresamisk', 'Anársámegiella')
export const KILDIN_SAMI = Language(null, [], 'sjd', 'Kildin sami', 'Kildinsamisk', 'Kildinsamisk', 'Gielddasámegiella')
export const SWEDISH = Language('sv', ['swe'], 'swe', 'Swedish', 'Svensk', 'Svensk', 'Ruoŧagiella')
export const UNDEFINED_LANGUAGE = Language(null, ['und'], 'und', 'Unknown language', 'Ukjent språk', 'Ukjent språk', 'Dovdameahttun giella')
export const SAMI_LANGUAGES = LanguageGroup('smi', 'Sami languages', 'Samisk språk', 'Samisk språk', 'Sámegielat');
export const ALL_LANGUAGES = Object.freeze([
  UNDEFINED_LANGUAGE,
  ENGLISH,
  BOKMAAL,
  NYNORSK,
  NORWEGIAN,
  MISCELLANEOUS,
  DANISH,
  SWEDISH,
  SPANISH,
  GERMAN,
  NORTHERN_SAMI,
  SOUTHERN_SAMI,
  LULE_SAMI,
  PITE_SAMI,
  SKOLT_SAMI,
  ENARE_SAMI,
  KILDIN_SAMI,
  FRENCH,
  MULTIPLE,
  DUTCH,
  FINNISH,
  ICELANDIC,
  ITALIAN,
  PORTUGUESE,
  RUSSIAN,
  AFRIKAANS,
  BULGARIAN,
  GREEK,
  CATALAN,
  CHINESE,
  POLISH,
  CZECH,
  HUNGARIAN,
  SAMI_LANGUAGES
])
