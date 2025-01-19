export const keyboardLayout = `q w e r t  y u i o p [ ] \\
 a s d f g  h j k l ; '    
  z x c v b  n m , . /`;

export const keyboardLayoutSplit = keyboardLayout
  .split("\n")
  .map((line) => line.trim().replace(/\s+/g, ""));
