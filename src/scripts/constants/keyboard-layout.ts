import { getFingerMap } from "../utils/finger-map";

const qwerty = `q w e r t  y u i o p [ ] \\
 a s d f g  h j k l ; '    
  z x c v b  n m , . /`;

const dvoark = `' , . p y  f g c r l / = \\
  a o e u i  d h t n s -
  ; q j k x  b m w v z  `;

const colemak = `q w f p g  j l u y ; [ ] \\
  a r s t d  h n e i o '
  z x c v b  k m , . /  `;

export const keyboardLayoutSplit = qwerty
  .split("\n")
  .map((line) => line.trim().replace(/\s+/g, ""));

export const fingerMap = getFingerMap(keyboardLayoutSplit);
