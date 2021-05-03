function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from '../../pkg/react.js';
import { Redirect } from '../../pkg/react-router-dom.js';
import Styled from './EnterWinning.style.js';
import { ALERT_MESSAGE, INPUT_NAME, LOTTO, PATH, SESSION } from '../../constants/index.js';
import { initObject, isUniqueArray } from '../../utils/index.js';
import Button from '../../components/Button/Button.js';
import PageTitle from '../../components/PageTitle/PageTitle.js';
import { getExistBonusNumber, getExistMoneyInput, getExistNewLottoList, getExistWinningNumber } from '../../sessionData.js';

var EnterWinning = function EnterWinning(_ref) {
  var history = _ref.history;
  var existMoneyInput = getExistMoneyInput();
  var existNewLottoList = getExistNewLottoList();
  var existWinningNumber = getExistWinningNumber();
  var existBonusNumber = getExistBonusNumber();
  if (existMoneyInput === null) return /*#__PURE__*/React.createElement(Redirect, {
    to: "/"
  });

  var _useState = useState(existWinningNumber || initObject(Object.values(INPUT_NAME.WINNING_NUMBER), '')),
      _useState2 = _slicedToArray(_useState, 2),
      winningNumber = _useState2[0],
      setWinningNumber = _useState2[1];

  var _useState3 = useState(existBonusNumber || ''),
      _useState4 = _slicedToArray(_useState3, 2),
      bonusNumber = _useState4[0],
      setBonusNumber = _useState4[1];

  var handleChangeWinningNumber = function handleChangeWinningNumber(event) {
    setWinningNumber(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, _defineProperty({}, event.target.name, Number(event.target.value)));
    });
  };

  var handleChangeBonusNumber = function handleChangeBonusNumber(event) {
    setBonusNumber(Number(event.target.value));
  };

  var handleSubmitWinningNumber = function handleSubmitWinningNumber(event) {
    event.preventDefault();
    var numberList = [].concat(_toConsumableArray(Object.values(winningNumber)), [bonusNumber]);

    if (!isUniqueArray(numberList)) {
      alert(ALERT_MESSAGE.DUPLICATED_WINNING_NUMBER);
      return;
    }

    sessionStorage.setItem(SESSION.KEY.WINNING_NUMBER, JSON.stringify(winningNumber));
    sessionStorage.setItem(SESSION.KEY.BONUS_NUMBER, bonusNumber);
    history.push({
      pathname: PATH.RESULT,
      state: {
        lottoList: existNewLottoList,
        moneyInput: existMoneyInput,
        winningNumber: winningNumber,
        bonusNumber: bonusNumber
      }
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, null, "\uB2F9\uCCA8 \uBC88\uD638 \uC785\uB825"), /*#__PURE__*/React.createElement("p", null, "\uC9C0\uB09C \uC8FC \uB2F9\uCCA8\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmitWinningNumber
  }, /*#__PURE__*/React.createElement(Styled.InputGroup, null, /*#__PURE__*/React.createElement(Styled.Fieldset, null, /*#__PURE__*/React.createElement("legend", {
    hidden: true
  }, "\uB2F9\uCCA8 \uBC88\uD638 \uC785\uB825"), Object.keys(winningNumber).map(function (key, index) {
    return /*#__PURE__*/React.createElement(Styled.NumberInput, {
      key: key,
      type: "number",
      min: LOTTO.MIN_NUMBER,
      max: LOTTO.MAX_NUMBER,
      name: key,
      "aria-label": "".concat(index + 1, "\uBC88\uC9F8 \uB2F9\uCCA8 \uBC88\uD638"),
      value: winningNumber[key],
      onChange: handleChangeWinningNumber,
      required: true,
      autoFocus: index === 0
    });
  })), /*#__PURE__*/React.createElement(Styled.PlusIcon, null, "\u2795"), /*#__PURE__*/React.createElement("label", {
    htmlFor: "bonus-number",
    hidden: true
  }, "\uBCF4\uB108\uC2A4 \uBC88\uD638"), /*#__PURE__*/React.createElement(Styled.NumberInput, {
    type: "number",
    min: LOTTO.MIN_NUMBER,
    max: LOTTO.MAX_NUMBER,
    id: "bonus-number",
    name: "bonus-number",
    value: bonusNumber,
    onChange: handleChangeBonusNumber,
    required: true
  })), /*#__PURE__*/React.createElement(Button, null, "\uD83E\uDD41 \uB2F9\uCCA8 \uACB0\uACFC \uD655\uC778")));
};

export default EnterWinning;