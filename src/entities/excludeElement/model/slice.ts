import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface ExcludeElementState {
    element: string;
}

const initialState: ExcludeElementState = {
    element: '',
};

export const excludeElementSlice = createSlice({
    name: 'excludeElement',
    initialState,
    reducers: {
        setExcludeElement: (state, action) => {
            state.element = action.payload;
        },
        removeExcludeElement: (state) => {
            state.element = '';
        },
    },
});

export const { setExcludeElement, removeExcludeElement } =
    excludeElementSlice.actions;

export const getExcludeElement = () => (state: RootState) =>
    state.excludeElement.element;
export default excludeElementSlice.reducer;
