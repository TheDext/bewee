import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'app/store';

export interface CatalogItem {
    [key: string]: {
        _id: string;
        name: string;
        subcatalog?: boolean;
    }[];
}
export interface NavCategories {
    _id: string;
    name: string;
}

export interface CatalogState {
    showCatalog: boolean;
    categories: NavCategories[];
    subcategories: CatalogItem;
    types: CatalogItem;
    catalogCurrentIds: {
        categoryId: string;
        subcategoryId: string;
    };
}

const initialState: CatalogState = {
    showCatalog: false,
    categories: [
        {
            _id: 'j8GfpxyYQEmEj15mNuVKUw',
            name: 'Малышы 0-2',
        },
        {
            _id: 'GwACdN6og0aUY5G6zTkJdw',
            name: 'Девочки',
        },
    ],
    subcategories: {
        j8GfpxyYQEmEj15mNuVKUw: [
            {
                _id: 'w8afpxyYQEwghsf15mNucxag',
                name: 'Все вещи для малышей 0-2',
            },
            {
                _id: 'JlxOvJ1ZZE6cclTrLZZ7OQ',
                name: 'Комплекты и комбинезоны',
            },
            {
                _id: 'xWhGw2k1WU6rW6QtM6eCGw',
                name: 'Нижнее белье',
                subcatalog: true,
            },
        ],
        GwACdN6og0aUY5G6zTkJdw: [
            {
                _id: 'h5sf3ekn63wghsfmNucxCsaz',
                name: 'Все вещи для девочек',
            },
            {
                _id: 'GwACdN6og0aUY5G6zTkJdw',
                name: 'Футболки и майки',
                subcatalog: true,
            },
        ],
    },
    types: {
        xWhGw2k1WU6rW6QtM6eCGw: [
            {
                _id: 'YKrAV7AGUE6iGPxhi8NNqw',
                name: 'Трусы',
            },
            {
                _id: 'gEk7hvookkaOmcCBUzTiRw',
                name: 'Колготки',
            },
            {
                _id: 'GZTNS7tnEkueSnU8UYhtIA',
                name: 'Носки',
            },
        ],
        GwACdN6og0aUY5G6zTkJdw: [
            {
                _id: 'F6yw4CjLF0euJZezp4VOug',
                name: 'Футболки',
            },
            {
                _id: 'fE45dX9NV0WGkS6CM3DWZg',
                name: 'Майки',
            },
        ],
    },
    catalogCurrentIds: {
        categoryId: '',
        subcategoryId: '',
    },
};

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,
    reducers: {
        toggleShowCatalog: (state, action) => {
            state.showCatalog = action.payload;
        },
        setCategory: (state, action) => {
            state.catalogCurrentIds.categoryId = action.payload;
            state.catalogCurrentIds.subcategoryId = '';
        },
        setSubcategory: (state, action) => {
            if (state.catalogCurrentIds.subcategoryId === action.payload) {
                state.catalogCurrentIds.subcategoryId = '';
                return;
            }
            state.catalogCurrentIds.subcategoryId = action.payload;
        },
    },
});

export const { toggleShowCatalog, setCategory, setSubcategory } =
    catalogSlice.actions;

export default catalogSlice.reducer;

export const getCatalogVisible = () => (state: RootState) =>
    state.catalog.showCatalog;
export const getCurrentCatalog = () => (state: RootState) =>
    state.catalog.catalogCurrentIds;
export const getNavCategories = () => (state: RootState) =>
    state.catalog.categories;


export const getCatalogById =
    (_id: string, productType: boolean = false) =>
    (state: RootState) => {
        return !_id
            ? null
            : productType
              ? state.catalog.types[_id]
              : state.catalog.subcategories[_id];
    };
