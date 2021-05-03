function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from '../../pkg/react.js';
import Styled from './LottoNumberItem.style.js';

var LottoNumberItem = function LottoNumberItem(props) {
  return /*#__PURE__*/React.createElement(Styled.Container, _extends({
    enabled: props.enabled,
    number: Number(props.children)
  }, props));
};

LottoNumberItem.defaultProps = {
  enabled: true
};
export default LottoNumberItem;