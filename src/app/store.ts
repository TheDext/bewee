import { configureStore } from '@reduxjs/toolkit';
import { screenSizeSlice } from 'entities/screenSize/model/slice';
import { catalogSlice } from 'entities/catalog/model/slice';
import { searchSlice } from 'entities/search/model/slice';
import { excludeElementSlice } from 'entities/excludeElement/model/slice';

export const store = configureStore({
    reducer: {
        screenSize: screenSizeSlice.reducer,
        catalog: catalogSlice.reducer,
        search: searchSlice.reducer,
        excludeElement: excludeElementSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
