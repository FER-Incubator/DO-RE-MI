const NOTES = [
    'c', 'df', 'd', 'ef',
    'e', 'f', 'gf', 'g',
    'af', 'a', 'bf', 'b'
];
export { NOTES };

const KEY_TO_NOTE = {
  a: 'c',
  w: 'df',
  s: 'd',
  e: 'ef',
  d: 'e',
  f: 'f',
  t: 'gf',
  g: 'g',
  z: 'af',
  h: 'a',
  u: 'bf',
  j: 'b'
};
export { KEY_TO_NOTE };

const NOTE_TO_KEY = {
    c: 'a',
    df: 'w',
    d: 's',
    ef: 'e',
    e: 'd',
    f: 'f',
    gf: 't',
    g: 'g',
    af: 'z',
    a: 'h',
    bf: 'u',
    b: 'j'
};
export { NOTE_TO_KEY };

const VALID_BLACK_KEYS = ['w', 'e', 't', 'z', 'u'];
const VALID_WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const VALID_KEYS = [...VALID_BLACK_KEYS, ...VALID_WHITE_KEYS];
export { VALID_KEYS };