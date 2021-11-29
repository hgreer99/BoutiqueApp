import React from 'react';
import ShoppingCart from './ShoppingCart';
import { Provider } from 'react-redux';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <ShoppingCart/>
    </Provider>
  );
}
