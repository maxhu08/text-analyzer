import { layouts } from "../constants/keyboard-layout";
import { getFingerMap } from "./finger-map";

type Layout = keyof typeof layouts;

export const keyboardLayoutStore = () => {
  const splitLayout = getKeyboardLayoutLocalStorage()
    .layout.split("\n")
    .map((line: string) => line.trim().replace(/\s+/g, ""));

  return {
    getLayout: () => getKeyboardLayoutLocalStorage(),
    getLayoutSplit: () => splitLayout,
    getFingerMap: () => getFingerMap(splitLayout),
    setLayout: (layout: Layout) => {
      setKeyboardLayoutLocalStorage({ name: layout, layout: layouts[layout] });
    }
  };
};

export const setKeyboardLayoutLocalStorage = (value: { name: string; layout: string }) => {
  localStorage.setItem("keyboardLayout", JSON.stringify(value));
};

export const getKeyboardLayoutLocalStorage = (): { name: string; layout: string } => {
  const keyboardLayout = localStorage.getItem("keyboardLayout");

  if (!keyboardLayout) {
    const initialLayout = { name: "qwerty", layout: layouts["qwerty"] };
    setKeyboardLayoutLocalStorage(initialLayout);

    return initialLayout;
  }

  return JSON.parse(keyboardLayout);
};
