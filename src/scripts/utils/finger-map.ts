type FingerAssignment = "LP" | "LR" | "LM" | "LI" | "RI" | "RM" | "RR" | "RP";

export const getFingerMap = (keyboardLayoutSplit: string[]): Map<string, FingerAssignment> => {
  const keyboardFingerMap = new Map<string, FingerAssignment>();

  const row1 = keyboardLayoutSplit[0];
  keyboardFingerMap.set(row1[0], "LP");
  keyboardFingerMap.set(row1[1], "LR");
  keyboardFingerMap.set(row1[2], "LM");
  keyboardFingerMap.set(row1[3], "LI");
  keyboardFingerMap.set(row1[4], "LI");
  keyboardFingerMap.set(row1[5], "RI");
  keyboardFingerMap.set(row1[6], "RI");
  keyboardFingerMap.set(row1[7], "RM");
  keyboardFingerMap.set(row1[8], "RM");
  keyboardFingerMap.set(row1[9], "RR");
  keyboardFingerMap.set(row1[10], "RR");
  keyboardFingerMap.set(row1[11], "RP");
  keyboardFingerMap.set(row1[12], "RP");

  const row2 = keyboardLayoutSplit[1];
  keyboardFingerMap.set(row2[0], "LP");
  keyboardFingerMap.set(row2[1], "LR");
  keyboardFingerMap.set(row2[2], "LM");
  keyboardFingerMap.set(row2[3], "LI");
  keyboardFingerMap.set(row2[4], "LI");
  keyboardFingerMap.set(row2[5], "RI");
  keyboardFingerMap.set(row2[6], "RI");
  keyboardFingerMap.set(row2[7], "RM");
  keyboardFingerMap.set(row2[8], "RR");
  keyboardFingerMap.set(row2[9], "RP");
  keyboardFingerMap.set(row2[10], "RP");

  const row3 = keyboardLayoutSplit[2];
  keyboardFingerMap.set(row3[0], "LP");
  keyboardFingerMap.set(row3[1], "LR");
  keyboardFingerMap.set(row3[2], "LM");
  keyboardFingerMap.set(row3[3], "LI");
  keyboardFingerMap.set(row3[4], "LI");
  keyboardFingerMap.set(row3[5], "RI");
  keyboardFingerMap.set(row3[6], "RI");
  keyboardFingerMap.set(row3[7], "RM");
  keyboardFingerMap.set(row3[8], "RR");
  keyboardFingerMap.set(row3[9], "RP");

  console.log(keyboardFingerMap);

  return keyboardFingerMap;
};
