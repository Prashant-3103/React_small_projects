import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
reducer: {counter:counterReducer,
auth: authReducer
}

});



export default store;
