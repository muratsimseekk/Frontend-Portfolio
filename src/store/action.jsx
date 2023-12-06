export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const themeChange = () => {
  return { type: CHANGE_THEME };
};

export const languageChange = () => {
  return { type: CHANGE_LANGUAGE };
};
