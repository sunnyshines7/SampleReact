import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from '../reducers';
import storageSession from 'redux-persist/lib/storage/session'

export const basicStore = () => {
  return createStore(reducers);
}

export const configStore = () => {
  const persistConfig = {
    key: 'root',
    storage: storageSession
  }
  const configReducer = persistReducer(persistConfig, reducers);
  let store = createStore(configReducer)
  let persistor = persistStore(store)
  return { store, persistor };
}