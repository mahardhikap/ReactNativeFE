import {legacy_createStore, applyMiddleware} from '@reduxjs/toolkit';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers/articleReducer';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk, logger),
);
let persistor = persistStore(store);

export {store, persistor};
