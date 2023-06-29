import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './slices/userSlice.js';
import configureInterceptors from '../utils/axiosCustomize.jsx';

// Create the persist config
const persistConfig = {
  key: 'root',
  storage,
};
//Combine mutiple reducers
const rootReducer = combineReducers({
  user: userReducer,
});

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);



// Create the Redux store
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});



// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };