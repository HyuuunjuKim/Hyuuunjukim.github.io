function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React from '../../pkg/react.js';
import { getIntersectionCount } from '../../utils/index.js';
import LottoNumberItem from '../LottoNumberItem/LottoNumberItem.js';
import Styled from './LottoNumberList.style.js';

var LottoNumberList = function LottoNumberList(_ref) {
  var lottoList = _ref.lottoList,
      winningNumber = _ref.winningNumber,
      bonusNumber = _ref.bonusNumber;
  var winningNumbers = Object.values(winningNumber);
  var isRequiredValidate = !!(winningNumbers.length && bonusNumber);
  return /*#__PURE__*/React.createElement(Styled.Container, null, Object.entries(lottoList).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        id = _ref3[0],
        numberList = _ref3[1];

    var matchCount = getIntersectionCount(numberList, winningNumbers);
    var isRequiredCheckBonus = matchCount === 5;
    return /*#__PURE__*/React.createElement(Styled.Lotto, {
      key: id
    }, numberList.map(function (number) {
      var isMatchWinning = winningNumbers.includes(number);
      var isMatchBonus = isRequiredCheckBonus && bonusNumber === number;
      var isEnabled = isRequiredValidate && (isMatchWinning || isMatchBonus);
      return /*#__PURE__*/React.createElement(LottoNumberItem, {
        key: "".concat(id, "-").concat(number),
        enabled: isEnabled || !isRequiredValidate
      }, number);
    }));
  }));
};

LottoNumberList.defaultProps = {
  lottoList: {},
  winningNumber: {},
  bonusNumber: null
};
export default LottoNumberList;