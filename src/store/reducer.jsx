import { CHANGE_LANGUAGE, CHANGE_THEME } from "./action";
import { datalar } from "./data";

export const s12frontendChallengeKey = "s12ch";

const languages = [
  { name: "Türkçe", value: "tr" },
  { name: "English", value: "en" },
];

const browserLang = Intl.DateTimeFormat().resolvedOptions().locale;
const selectedLang = languages.find((lan) => browserLang.includes(lan.value));

const initialValues = {
  theme: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false,
  language: selectedLang ? selectedLang.value : "tr",
  data: selectedLang ? datalar[selectedLang.value] : datalar.tr,
};

function localStorageWrite(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageRead(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function localStorageMemory(key) {
  const lastState = localStorageRead(key);

  if (lastState) {
    return localStorageRead(key);
  } else {
    return initialValues;
  }
}

export function reducer(
  state = localStorageMemory(s12frontendChallengeKey),
  action
) {
  switch (action.type) {
    case CHANGE_THEME:
      const newState = { ...state, theme: action.payload };
      localStorageWrite(s12frontendChallengeKey, newState);
      return newState;

    case CHANGE_LANGUAGE:
      const updatedLang = state.language === "en" ? "tr" : "en";
      const updatedState = {
        ...state,
        language: updatedLang,
        data: datalar[updatedLang],
      };

      console.log(updatedState, "updated state");

      localStorageWrite(s12frontendChallengeKey, updatedState);
      return updatedState;

    default:
      return state;
  }
}
