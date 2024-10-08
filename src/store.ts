import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from '../'

export default configureStore({
    reducer: {
        auth: authReducer
    }
})