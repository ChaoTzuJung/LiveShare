import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppContainer } from 'react-hot-loader';
import reduxThunk from 'redux-thunk';
import promise from 'redux-promise';
import reducers from './reducers';
import Main from './containers/';
import 'materialize-css/dist/css/materialize.min.css';

//const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);
//createStore(reducer, initial state/Object當空的State, applyMiddleware)
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

//Provider tag 讓裡面的所有component都能統一在Store中管理元件，store接收剛更新的state
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.getElementById('app')
);
