import React from '../../pkg/react.js';
import Styled from './ToggleSwitch.style.js';

var ToggleSwitch = function ToggleSwitch(_ref) {
  var isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      title = _ref.title;
  return /*#__PURE__*/React.createElement(Styled.ToggleSwitch, null, /*#__PURE__*/React.createElement(Styled.ToggleCheckbox, {
    type: "checkbox",
    value: isChecked,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(Styled.ToggleText, null, title));
};

ToggleSwitch.defaultProps = {
  isChecked: false,
  onChange: function onChange() {},
  title: ''
};
export default ToggleSwitch;