export const analyze = (text: string) => {
  const charCounts = new Map<string, number>();
  const sameFingerNgrams = new Map<string, number>();

  const fingerMap: Record<string, string> = {
    q: "LP",
    a: "LP",
    z: "LP",
    w: "LR",
    s: "LR",
    x: "LR",
    e: "LM",
    d: "LM",
    c: "LM",
    r: "LI",
    f: "LI",
    v: "LI",
    t: "LI",
    g: "LI",
    b: "LI",
    y: "RI",
    h: "RI",
    n: "RI",
    u: "RI",
    j: "RI",
    m: "RI",
    i: "RM",
    k: "RM",
    o: "RR",
    l: "RR",
    p: "RP"
  };

  // count character frequencies
  for (const char of text) {
    charCounts.set(char, (charCounts.get(char) || 0) + 1);
  }

  const ngramLength = 2;
  // generate bigrams of any length and check if they belong to the same finger group
  for (let i = 0; i <= text.length - ngramLength; i++) {
    let isSameFinger = true;
    let ngram = "";

    // build the bigram and check if it's composed only of letters
    for (let j = 0; j < ngramLength; j++) {
      const char = text[i + j].toLowerCase();
      if (/[a-z]/.test(char)) {
        ngram += char;
      } else {
        isSameFinger = false;
        break;
      }
    }

    if (isSameFinger) {
      const firstFinger = fingerMap[ngram[0]];

      // check if all characters in the ngram are typed with the same finger group
      for (let j = 1; j < ngramLength; j++) {
        if (fingerMap[ngram[j]] !== firstFinger) {
          isSameFinger = false;
          break;
        }
      }

      if (isSameFinger) {
        sameFingerNgrams.set(ngram, (sameFingerNgrams.get(ngram) || 0) + 1);
      }
    }
  }

  return {
    textLength: text.length,
    uniqueKeys: charCounts.size,
    keyFrequencies: Object.fromEntries(charCounts),
    totalSfbs: Array.from(sameFingerNgrams.values()).reduce((sum, count) => sum + count, 0),
    uniqueSfbs: sameFingerNgrams.size,
    sfbs: Object.fromEntries(sameFingerNgrams)
  };
};
