export const setTextLocalStorage = (value: string) => {
  localStorage.setItem("text", value);
};

export const getTextLocalStorage = () => {
  return localStorage.getItem("text");
};
