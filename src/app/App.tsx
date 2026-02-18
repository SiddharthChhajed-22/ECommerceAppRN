import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { AppNavigator } from './navigation/AppNavigator';
import { store } from './store';
import { registerAuthTokenGetter } from '../core/network/axiosBase';
import { RootState } from './store/rootReducer';

const TokenRegistrar = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  registerAuthTokenGetter(() => token);
  return null;
};

const AppInner = () => (
  <>
    <TokenRegistrar />
    <AppNavigator />
  </>
);

const App = () => (
  <Provider store={store}>
    <AppInner />
  </Provider>
);

export default App;

