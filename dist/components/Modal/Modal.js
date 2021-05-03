function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from '../../pkg/react.js';
import Styled from './Modal.style.js';

var Modal = function Modal(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(Styled.Dimmer, {
    onClick: props.onClose
  }, /*#__PURE__*/React.createElement(Styled.Container, null, /*#__PURE__*/React.createElement(Styled.CloseButton, {
    onClick: props.onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 40 40"
  }, /*#__PURE__*/React.createElement("path", {
    className: "close-x",
    d: "M 10,10 L 30,30 M 30,10 L 10,30"
  }))), children));
};

Modal.Title = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/React.createElement(Styled.Title, null, children);
};

Modal.defaultProps = {
  onClose: function onClose() {}
};
export default Modal;