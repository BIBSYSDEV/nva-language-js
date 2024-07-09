export default (iso6395Code, eng, nob, nno, sme) => {
  return {
    uri: `http://lexvo.org/id/iso639-5/${iso6395Code}`,
    iso6391Code: null,
    iso6392Codes: [],
    iso6393Code: null,
    iso6395Code,
    eng,
    nob,
    nno,
    sme
  }
}
