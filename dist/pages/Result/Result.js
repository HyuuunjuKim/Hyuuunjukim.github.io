function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState } from '../../pkg/react.js';
import { Link, Redirect } from '../../pkg/react-router-dom.js';
import Styled from './Result.style.js';
import Button from '../../components/Button/Button.js';
import LottoNumberList from '../../components/LottoNumberList/LottoNumberList.js';
import LottoNumberItem from '../../components/LottoNumberItem/LottoNumberItem.js';
import Modal from '../../components/Modal/Modal.js';
import WinningTable from '../../components/WinningTable/WinningTable.js';
import PageTitle from '../../components/PageTitle/PageTitle.js';
import { getProfitRate, getWinningResult } from '../../services/Result.js';
import { getExistBonusNumber, getExistMoneyInput, getExistNewLottoList, getExistWinningNumber } from '../../sessionData.js';

var Result = function Result() {
  var existWinningNumber = getExistWinningNumber();
  var existBonusNumber = getExistBonusNumber();
  if (existWinningNumber === null || existBonusNumber === null) return /*#__PURE__*/React.createElement(Redirect, {
    to: "/"
  });
  var lottoList = getExistNewLottoList();
  var moneyInput = getExistMoneyInput();
  var winningNumber = existWinningNumber;
  var bonusNumber = existBonusNumber;
  var winningResult = getWinningResult(lottoList, {
    winningNumber: winningNumber,
    bonusNumber: bonusNumber
  });
  var profitRate = getProfitRate(winningResult, moneyInput);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isModalOpen = _useState2[0],
      setIsModalOpen = _useState2[1];

  var handleOpenDetail = function handleOpenDetail() {
    setIsModalOpen(true);
  };

  var handleCloseDetail = function handleCloseDetail(event) {
    if (event.target !== event.currentTarget) return;
    setIsModalOpen(false);
  };

  var handleRestart = function handleRestart() {
    sessionStorage.clear();
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageTitle, null, "\uC5BC\uB9C8\uB098 \uC783\uC5C8\uC744\uAE4C\uC694?"), /*#__PURE__*/React.createElement(Styled.WinningNumber, null, /*#__PURE__*/React.createElement(Styled.NumberWrapper, null, /*#__PURE__*/React.createElement(Styled.NumberBorder, null, Object.values(winningNumber).map(function (number) {
    return /*#__PURE__*/React.createElement(LottoNumberItem, {
      key: "winning-number-".concat(number)
    }, number);
  })), /*#__PURE__*/React.createElement(Styled.NumberText, null, "\uB2F9\uCCA8 \uBC88\uD638")), /*#__PURE__*/React.createElement(Styled.PlusIcon, null, "\u2795"), /*#__PURE__*/React.createElement(Styled.NumberWrapper, null, /*#__PURE__*/React.createElement(Styled.NumberBorder, null, /*#__PURE__*/React.createElement(LottoNumberItem, null, bonusNumber)), /*#__PURE__*/React.createElement(Styled.NumberText, null, "\uBCF4\uB108\uC2A4 \uBC88\uD638"))), /*#__PURE__*/React.createElement(LottoNumberList, {
    lottoList: lottoList,
    winningNumber: winningNumber,
    bonusNumber: bonusNumber
  }), /*#__PURE__*/React.createElement(Styled.ButtonContainer, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleOpenDetail
  }, "\u2728 \uACB0\uACFC \uD655\uC778"), /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, /*#__PURE__*/React.createElement(Button, {
    bgColor: "#d6d6d6",
    onClick: handleRestart
  }, "\u21AA\uFE0F \uB2E4\uC2DC \uC2DC\uC791"))), isModalOpen && /*#__PURE__*/React.createElement(Modal, {
    onClose: handleCloseDetail
  }, /*#__PURE__*/React.createElement(Modal.Title, null, "\uB2F9\uCCA8 \uACB0\uACFC \uC0C1\uC138 \uBCF4\uAE30"), /*#__PURE__*/React.createElement(WinningTable, {
    winningResult: winningResult
  }), /*#__PURE__*/React.createElement(Styled.ProfitRateMessage, null, "\uD83D\uDCB8\uB2F9\uC2E0\uC758 \uC218\uC775\uB960\uC744 ", /*#__PURE__*/React.createElement("strong", null, profitRate, "%"), "\uC785\uB2C8\uB2E4\uD83D\uDCB8")));
};

export default Result;