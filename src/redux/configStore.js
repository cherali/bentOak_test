import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer, createMigrate } from 'redux-persist'
import expireReducer from 'redux-persist-expire';
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers/rootReducers'



export const configureStore = preloadedState => {
  const middlewares = []
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const storeEnhancers = [middlewareEnhancer]

  const composedEnhancer = compose(
    ...storeEnhancers
  )

  const key = ['bentOak_test']   // add key for persist data [rootReducer]
  const blacklist = []  // add key to avoid persist



  // if data structure changed 
  const migrations = {
    0: (state) => {
      // migration clear out device state
      return {
        ...state,
        device: undefined
      }
    },
    1: (state) => {
      // migration to keep only device state
      return {
        device: state.device
      }
    }
  }



  // configurations
  const persistConfig = {
    key,
    storage,
    blacklist,
    migrate: createMigrate(migrations, { debug: false }),
    transforms: [
      expireReducer('user', {
        // (Optional) Key to be used for the time relative to which store is to be expired
        persistedAtKey: 'user_persisted_at',
        // (Required) Seconds after which store will be expired
        expireSeconds: 60 * 60 * 24 * 180, // 180 day
        // (Optional) State to be used for resetting e.g. provide initial reducer state
        expiredState: {},
        // (Optional) Use it if you don't want to manually set the time in the reducer i.e. at `persistedAtKey` 
        // and want the store to  be automatically expired if the record is not updated in the `expireSeconds` time
        autoExpire: true
      }),
    ]
  }

  const rootReducerEnhancer = persistReducer(persistConfig, rootReducer)


  // create store
  const store = createStore(
    rootReducerEnhancer,
    preloadedState,
    composedEnhancer
  )



  //persist store
  const persistor = persistStore(store)

  return { store, persistor }

};
