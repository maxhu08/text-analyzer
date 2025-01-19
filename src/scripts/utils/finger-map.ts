type FingerAssignment = "LP" | "LR" | "LM" | "LI" | "RI" | "RM" | "RR" | "RP";

export const getFingerMap = (keyboardLayoutSplit: string[]): Map<string, FingerAssignment> => {
  const keyboardFingerMap = new Map<string, FingerAssignment>();

  // Top row (including numbers and symbols)
  const row1 = keyboardLayoutSplit[0];
  keyboardFingerMap.set(row1[0], "LP"); // ~
  keyboardFingerMap.set(row1[1], "LP"); // 1
  keyboardFingerMap.set(row1[2], "LR"); // 2
  keyboardFingerMap.set(row1[3], "LM"); // 3
  keyboardFingerMap.set(row1[4], "LI"); // 4
  keyboardFingerMap.set(row1[5], "LI"); // 5
  keyboardFingerMap.set(row1[6], "RI"); // 6
  keyboardFingerMap.set(row1[7], "RI"); // 7
  keyboardFingerMap.set(row1[8], "RM"); // 8
  keyboardFingerMap.set(row1[9], "RR"); // 9
  keyboardFingerMap.set(row1[10], "RP"); // 0
  keyboardFingerMap.set(row1[11], "RP"); // -
  keyboardFingerMap.set(row1[12], "RP"); // =

  // Second row (QWERTY row)
  const row2 = keyboardLayoutSplit[1];
  keyboardFingerMap.set(row2[0], "LP"); // q
  keyboardFingerMap.set(row2[1], "LR"); // w
  keyboardFingerMap.set(row2[2], "LM"); // e
  keyboardFingerMap.set(row2[3], "LI"); // r
  keyboardFingerMap.set(row2[4], "LI"); // t
  keyboardFingerMap.set(row2[5], "RI"); // y
  keyboardFingerMap.set(row2[6], "RI"); // u
  keyboardFingerMap.set(row2[7], "RM"); // i
  keyboardFingerMap.set(row2[8], "RR"); // o
  keyboardFingerMap.set(row2[9], "RP"); // p
  keyboardFingerMap.set(row2[10], "RP"); // [
  keyboardFingerMap.set(row2[11], "RP"); // ]

  // Third row (ASDF row)
  const row3 = keyboardLayoutSplit[2];
  keyboardFingerMap.set(row3[0], "LP"); // a
  keyboardFingerMap.set(row3[1], "LR"); // s
  keyboardFingerMap.set(row3[2], "LM"); // d
  keyboardFingerMap.set(row3[3], "LI"); // f
  keyboardFingerMap.set(row3[4], "LI"); // g
  keyboardFingerMap.set(row3[5], "RI"); // h
  keyboardFingerMap.set(row3[6], "RI"); // j
  keyboardFingerMap.set(row3[7], "RM"); // k
  keyboardFingerMap.set(row3[8], "RR"); // l
  keyboardFingerMap.set(row3[9], "RP"); // ;
  keyboardFingerMap.set(row3[10], "RP"); // '

  // Fourth row (ZXCV row)
  const row4 = keyboardLayoutSplit[3];
  keyboardFingerMap.set(row4[0], "LP"); // z
  keyboardFingerMap.set(row4[1], "LR"); // x
  keyboardFingerMap.set(row4[2], "LM"); // c
  keyboardFingerMap.set(row4[3], "LI"); // v
  keyboardFingerMap.set(row4[4], "LI"); // b
  keyboardFingerMap.set(row4[5], "RI"); // n
  keyboardFingerMap.set(row4[6], "RI"); // m
  keyboardFingerMap.set(row4[7], "RM"); // ,
  keyboardFingerMap.set(row4[8], "RR"); // .
  keyboardFingerMap.set(row4[9], "RP"); // /

  return keyboardFingerMap;
};
