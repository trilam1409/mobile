import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../reducers/index';

import {
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

// // Connect our store to the reducers
const middleware = createReactNavigationReduxMiddleware(
    state => state.nav
);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default function configureStore() {
  let store = createStore(persistedReducer, applyMiddleware(thunk, middleware));
  let persistor = persistStore(store);
  return { store, persistor };
}
