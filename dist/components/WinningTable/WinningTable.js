function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from '../../pkg/react.js';
import { WINNING_TABLE } from '../../constants/index.js';
import { currencyFormat } from '../../utils/index.js';
import Styled from './WinningTable.style.js';

var WinningTable = function WinningTable(_ref) {
  var winningResult = _ref.winningResult;
  return /*#__PURE__*/React.createElement(Styled.Table, null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement(Styled.TableRow, null, /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uB4F1\uC218"), /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uC77C\uCE58 \uAC2F\uC218"), /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uB2F9\uCCA8\uAE08"), /*#__PURE__*/React.createElement(Styled.TableHeader, null, "\uB2F9\uCCA8 \uAC2F\uC218"))), /*#__PURE__*/React.createElement("tbody", null, Object.entries(winningResult).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        ranking = _ref3[0],
        winningCount = _ref3[1];

    return /*#__PURE__*/React.createElement(Styled.TableRow, {
      key: ranking
    }, /*#__PURE__*/React.createElement(Styled.TableItem, null, WINNING_TABLE[ranking].TITLE), /*#__PURE__*/React.createElement(Styled.TableItem, null, WINNING_TABLE[ranking].MATCH_CONDITION), /*#__PURE__*/React.createElement(Styled.TableItem, null, currencyFormat(WINNING_TABLE[ranking].PRIZE)), /*#__PURE__*/React.createElement(Styled.TableItem, null, /*#__PURE__*/React.createElement("span", null, winningCount), "\uAC1C"));
  })));
};

WinningTable.defaultProps = {
  winningResult: {}
};
export default WinningTable;