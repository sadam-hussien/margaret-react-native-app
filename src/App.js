import React from 'react';

import StackNavigator from './routes';

import {Provider} from 'react-redux';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
