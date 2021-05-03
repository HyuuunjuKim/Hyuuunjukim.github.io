import { SESSION } from './constants/index.js';
export var getExistMoneyInput = function getExistMoneyInput() {
  return sessionStorage.getItem(SESSION.KEY.MONEY_INPUT);
};
export var getExistNewLottoList = function getExistNewLottoList() {
  return JSON.parse(sessionStorage.getItem(SESSION.KEY.NEW_LOTTO_LIST));
};
export var getExistWinningNumber = function getExistWinningNumber() {
  return JSON.parse(sessionStorage.getItem(SESSION.KEY.WINNING_NUMBER));
};
export var getExistBonusNumber = function getExistBonusNumber() {
  return sessionStorage.getItem(SESSION.KEY.BONUS_NUMBER);
};