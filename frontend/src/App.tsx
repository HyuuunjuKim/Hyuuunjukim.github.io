import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { PATH } from './constants';
import { HomePage } from './pages';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Switch>
          <Route exact path={PATH.HOME} component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
