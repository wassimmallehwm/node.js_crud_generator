import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import settingsReducer from './global/settings'
import entitiesReducer from './global/entities'
import entitiesLabelsReducer from './global/entities-labels'

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    entities: entitiesReducer,
    entitiesLabels: entitiesLabelsReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
