# nva-language-js
Javascript implementation of NVA (the Norwegian national research archive) language handling.

Languages in NVA are represented by URIs, this module allows users to find the correct URI for a language and find a name string in a given language for each URI without dereferencing the URI.

NVA-language also routes non-preferred representations to preferred representations.

## Using the library

Install with either:

```javascript
    const { <function(s)> } = require('nva-language)
```

or

```javascript
    import { <function(s)> }  from 'nva-language'
```

(replace <function(s)> with the functions you actually use, see below).

Use with:

```javascript
    const english = getLanguageByBokmaalName('Engelsk')
```

## The language object

All functions return a language object, which has the structure:

```json
  {
    "uri": "http://lexvo.org/id/iso639-3/deu",
    "iso6391Code": "de",
    "iso6392Codes": ["ger", "deu"],
    "iso6393Code": "deu",
    "eng": "German",
    "nob": "Tysk",
    "nno": "Tysk",
    "sme": "Duiskkagiella"
  }
```

The properties are structured as follows:

-   uri: a Lexvo ISO 639-3 uri
-   iso6391Code: an ISO 639-1, two-letter code
-   iso6392Codes: an array containing ISO 639-2 B/T three-letter codes (min one, max. two items)
-   iso6393Code: an ISO 639-3 code
-   eng: the English name of the language
-   nob: the Norwegian Bokmål name of the language
-   nno: the Norwegian Nynorsk name of the language
-   sme: the Northern Sami name of the language

## Available functions

There are a number of methods provided by nva-language, all of which return a Language object, these have self-explanatory names:

-   getLanguageByBokmaalName
    -   example: `const english = getLanguageByBokmaalName('Engelsk')`
    -   Given a Norwegian Bokmål token for a language, say "Engelsk", returns a Language object that either matches the token, or is the Undefined language
    -   Matching is not case-sensitive
-   getLanguageByEnglishName
    -   example: `const english = getLanguageByEnglishName('English')`
    -   Given a Norwegian Bokmål token for a language, say "English", returns a Language object that either matches the token, or is the Undefined language
    -   Matching is not case-sensitive
-   getLanguageByIso6391Code
    -   example: `const english = getLanguageByIso6391Code('en')`
    -   Given an ISO 639-1 code, returns a Language object that either matches the token, or is the Undefined language
    -   Matching is not case-sensitive
-   getLanguageByIso6392Code
    -   example: `const english = getLanguageByIso6392Code('eng')`
    -   Given an ISO 639-2 code, returns a Language object that either matches the token, or is the Undefined language
    -   Returns e.g. a Language object for German if either the B/T ("ger", "deu") variants are supplied
    -   Matching is not case-sensitive
-   getLanguageByIso6393Code
    -   example: `const english = getLanguageByIso6393Code('eng')`
    -   Given an ISO 639-1 code, returns a Language object that either matches the token, or is the Undefined language
    -   Matching is not case-sensitive
-   getLanguageByNynorskName
    -   example: `const english = getLanguageByNynorskName('Engelsk')`
    -   Given a Norwegian Nynorsk token for a language, say "Engelsk", returns a Language object that either matches the token, or is the Undefined language
    -   Matching is not case-sensitive
    -   The only difference between getLanguageByNynorskName and getLanguageByBokmaalName is Bokmål: "Flere språk", Nynorsk "Fleire språk"
-   getLanguageBySamiName
    -   example: `const english = getLanguageBySamiName('Eaŋgalsgiella')`
    -   Given a Northern Sami token for a language, say "Eaŋgalsgiella", returns a Language object that either matches the token, or is the Undefined language
    -   Matching is not case-sensitive
-   getLanguageByUri
    -   example: `const english = getLanguageByUri(' http://lexvo.org/id/iso639-3/eng')`
    -   Given a Lexvo ISO 639-3 URI, returns the corresponding language object or Undefined language (in the case that the URI is not in use)
    -   Note: Lexvo does *not* use HTTPS

## Notes
### Valid and invalid languages

The languages supported in NVA are limited to the core languages used in Norwegian research publications, the list grows over time, but the list is still not long.

Thus, some valid languages will return Undefined Language not because they are invalid but because they are undefined in the context of NVA.

### Norwegian

Since NVA is typically concerned with written language, codes and strings related to "Norwegian", as opposed to "Bokmål" and "Nynorsk" are not to be used.

Using a term associated with "Norwegian" will return "Bokmål". No offense is intended here, this mechanism fits better for the majority of cases where texts are marked as "Norwegian".

### Sami

Since the primary source for the data for this module has been NSD DBH's publication channel data, a choice was made to map all "Samisk" to Northern Sami. This is unfortunate, but it solves the issue in view of a lack of Sami language skills. Sorry about that.

### More than one language

We use the ISO 639-3 `mul` code for these cases, which replaces the sometimes-used `mis` code if provided as input.
