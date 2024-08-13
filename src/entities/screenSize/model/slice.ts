import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface ScreenSizeState {
    value: {
        isMobile: boolean;
        isTablet: boolean;
        isDesktop: boolean;
    };
}

const initialState: ScreenSizeState = {
    value: {
        isMobile: null,
        isTablet: null,
        isDesktop: null,
    },
};

export const screenSizeSlice = createSlice({
    name: 'screenSize',
    initialState,
    reducers: {
        setup: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setup } = screenSizeSlice.actions;

export default screenSizeSlice.reducer;

export const getScreenSize = () => (state: RootState) => {
    return state.screenSize.value;
};
