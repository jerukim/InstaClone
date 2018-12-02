import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({ user });

const persistedReducer = persistReducer(persistConfig, reducer);

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, logger)
);

const store = createStore(persistedReducer, middleware);

export const persistor = persistStore(store);

export default store;
export * from './user';
