import { configKeys } from "../utils/enums";

export const useCheckAuth = (): string | boolean => {
  let token = localStorage.getItem(configKeys.AUTH_TOKEN);
  return token ? token : false;
};
