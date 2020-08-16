import { checkIsPwa } from './is-pwa';

export const checkIsNotPwa = () => {
  return checkIsPwa() !== undefined ? !checkIsPwa() : undefined;
};

export const isNotPwa = checkIsNotPwa();
