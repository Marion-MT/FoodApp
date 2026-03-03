import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [],
};

export const favoritessSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.value.push(action.payload);
           // console.log('Add ' + action.payload.name + ' to favorites');
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter(recipe => recipe.name !== action.payload.name);
           // console.log('Remove ' + action.payload.name + ' from favorites');
        },
        removeAllFavorites: (state) => {
            state.value = [];
        },
    },
});

export const { addFavorite, removeFavorite, removeAllFavorites } = favoritessSlice.actions;
export default favoritessSlice.reducer;
