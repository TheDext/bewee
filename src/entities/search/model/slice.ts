import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface ScreenSizeState {
    showMobileSearchBar: boolean;
}

const initialState: ScreenSizeState = {
    showMobileSearchBar: false,
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setShowSearch: (state, action) => {
            state.showMobileSearchBar = action.payload;
        },
    },
});

export const { setShowSearch } = searchSlice.actions;

export default searchSlice.reducer;

export const getMobileSearchBarVisible = () => (state: RootState) => {
    return state.search.showMobileSearchBar;
};
