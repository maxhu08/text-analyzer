type FingerAssignment = "LP" | "LR" | "LM" | "LI" | "RI" | "RM" | "RR" | "RP";

export const getFingerMap = (keyboardLayoutSplit: string[]): Record<string, FingerAssignment> => {
  const fingerAssignments: Record<FingerAssignment, string[]> = {
    LP: ["q", "a", "z"],
    LR: ["w", "s", "x"],
    LM: ["e", "d", "c"],
    LI: ["r", "t", "f", "g", "v", "b"],
    RI: ["y", "u", "h", "j", "n", "m"],
    RM: ["i", "k"],
    RR: ["o", "l"],
    RP: ["p", ";", "'", "/"]
  };

  const keyboardFingerMap: Record<string, FingerAssignment> = {};

  keyboardLayoutSplit.forEach((line) => {
    for (let key of line) {
      Object.keys(fingerAssignments).forEach((finger) => {
        if (fingerAssignments[finger as FingerAssignment].includes(key)) {
          keyboardFingerMap[key] = finger as FingerAssignment;
        }
      });
    }
  });

  return keyboardFingerMap;
};
