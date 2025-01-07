import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth-slice'



const store = configureStore({
    reducer: {
        // Define your slices here
        auth: authReducer
    }
});

export default store;