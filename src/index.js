import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import {listReducer} from './reducers'

const store = createStore(listReducer)

store.subscribe(() => {
  if(!Object.is(store.getState(),{})){
      localStorage.setItem('react-todo', JSON.stringify(store.getState()))
  }
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
