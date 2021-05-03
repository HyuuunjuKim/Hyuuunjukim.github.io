function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from '../../pkg/react.js';
import Button from '../../components/Button/Button.js';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList.js';
import PageTitle from '../../components/PageTitle/PageTitle.js';
import ToggleSwitch from '../../components/ToggleSwitch/ToggleSwitch.js';
import { ALERT_MESSAGE, LOTTO, PATH, SESSION } from '../../constants/index.js';
import { purchaseLottoList } from '../../services/Main.js';
import { getExistMoneyInput, getExistNewLottoList } from '../../sessionData.js';
import { isEmptyObject } from '../../utils/index.js';
import { Styled } from './Main.style.js';

var Main = function Main(_ref) {
  var history = _ref.history;
  var existMoneyInput = getExistMoneyInput();
  var existNewLottoList = getExistNewLottoList();

  var _useState = useState(existMoneyInput || ''),
      _useState2 = _slicedToArray(_useState, 2),
      moneyInput = _useState2[0],
      setMoneyInput = _useState2[1];

  var _useState3 = useState(existNewLottoList || {}),
      _useState4 = _slicedToArray(_useState3, 2),
      lottoList = _useState4[0],
      setLottoList = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isNumberShowing = _useState6[0],
      setIsNumberShowing = _useState6[1];

  var lottoCount = Object.entries(lottoList).length;

  var handleSubmitMoneyInput = function handleSubmitMoneyInput(event) {
    event.preventDefault();
    var newLottoList = purchaseLottoList(moneyInput);
    setLottoList(newLottoList);
    sessionStorage.setItem(SESSION.KEY.MONEY_INPUT, moneyInput);
    sessionStorage.setItem(SESSION.KEY.NEW_LOTTO_LIST, JSON.stringify(newLottoList));
  };

  var handleChangeMoneyInput = function handleChangeMoneyInput(event) {
    setMoneyInput(Number(event.target.value));
  };

  var handleToggleSwitch = function handleToggleSwitch(event) {
    setIsNumberShowing(event.target.checked);
  };

  var handleClickEnterWinning = function handleClickEnterWinning() {
    if (!moneyInput || isEmptyObject(lottoList)) {
      alert(ALERT_MESSAGE.NO_PURCHASED_LOTTO);
      return;
    }

    history.push({
      pathname: PATH.ENTER_WINNING,
      state: {
        lottoList: lottoList,
        moneyInput: moneyInput
      }
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, null, "\uB85C\uB610 \uAD6C\uB9E4"), /*#__PURE__*/React.createElement(Styled.Form, {
    onSubmit: handleSubmitMoneyInput
  }, /*#__PURE__*/React.createElement(Styled.MoneyInput, {
    type: "number",
    value: moneyInput,
    min: LOTTO.PRICE,
    onChange: handleChangeMoneyInput,
    disabled: lottoCount > 0 ? 'disabled' : '',
    placeholder: "\uB3C8\uC744 \uB0B4\uC2DC\uC624",
    required: true,
    autoFocus: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: lottoCount > 0 ? 'disabled' : '',
    minWidth: '80px'
  }, "\uAD6C\uC785")), /*#__PURE__*/React.createElement(Styled.LottoListTop, null, /*#__PURE__*/React.createElement(Styled.LottoCountContainer, null, "\uD604\uC7AC \uAD6C\uC785\uD55C \uB85C\uB610 ", /*#__PURE__*/React.createElement(Styled.LottoCount, null, lottoCount), "\uAC1C"), /*#__PURE__*/React.createElement(ToggleSwitch, {
    title: "\uBC88\uD638 \uBCF4\uAE30",
    isChecked: isNumberShowing,
    onChange: handleToggleSwitch
  })), isNumberShowing && /*#__PURE__*/React.createElement(LottoNumberList, {
    lottoList: lottoList
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickEnterWinning
  }, "\uD83E\uDD29 \uB2F9\uCCA8 \uBC88\uD638 \uC785\uB825"));
};

export default Main;