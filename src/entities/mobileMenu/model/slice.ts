import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface ScreenSizeState {
    value: boolean;
}

const initialState: ScreenSizeState = {
    value: false,
};

export const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = !state.value;
        },
    },
});

export const { toggle } = mobileMenuSlice.actions;

export default mobileMenuSlice.reducer;

export const getMobileMenuVisible = () => (state: RootState) => {
    return state.mobileMenu.value;
};
