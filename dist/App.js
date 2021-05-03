import React from './pkg/react.js';
import { HashRouter as Router, Route } from './pkg/react-router-dom.js';
import { ThemeProvider } from './pkg/@emotion/react.js';
import EnterWinning from './pages/EnterWinning/EnterWinning.js';
import Main from './pages/Main/Main.js';
import Result from './pages/Result/Result.js';
import { PATH } from './constants/index.js';
import Styled from './App.style.js';
var theme = {
  colors: {
    primary: '#2ac1bc'
  }
};

var App = function App() {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: theme
  }, /*#__PURE__*/React.createElement(Styled.Container, null, /*#__PURE__*/React.createElement(Styled.Title, null, "\uD589\uC6B4\uC758 \uB85C\uB610"), /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: PATH.MAIN,
    component: Main
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: PATH.ENTER_WINNING,
    component: EnterWinning
  }), /*#__PURE__*/React.createElement(Route, {
    exact: true,
    path: PATH.RESULT,
    component: Result
  }))));
};

export default App;