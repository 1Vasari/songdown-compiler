'use strict';

module.exports = {
  VERSE_START: ':',
  VERSE_END: '---',
  VERSE_COMMON_HEADER: /\:$/,
  VERSE_CHORDS_HEADER: /\+$/,
  VERSE_LYRICS_HEADER: /\-$/,
  ANY_VERSE_HEADER: /\:$|\+$|\-$/, // all the thingz
  GOTO: /^\-\>\s+/
};
