import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
    token: string | null
    error: string | null
    loading: boolean
};

const initialState: AuthState = {
    token: null,
    error: null,
    loading: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        logout: state => {
            state.token = null;
        }
    }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;