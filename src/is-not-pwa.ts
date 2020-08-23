import { checkIsPwa } from './is-pwa';

export const checkIsNotPwa = () => !checkIsPwa();

export const isNotPwa = checkIsNotPwa();
