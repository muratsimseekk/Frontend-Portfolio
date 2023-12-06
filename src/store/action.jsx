export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export const themeChange = (payload) => {
  return { type: CHANGE_THEME, payload: payload };
};

export const languageChange = () => {
  return { type: CHANGE_LANGUAGE };
};
