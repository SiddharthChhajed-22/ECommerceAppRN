import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { AppNavigator } from './src/navigation/AppNavigator';
import { store } from './src/store/store';
import { registerAuthTokenGetter } from './src/api/network/axiosBase';
import { RootState } from './src/store/rootReducer';

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

