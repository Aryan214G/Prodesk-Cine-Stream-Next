import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({

    name: "favorites",

    initialState: {

        favorites: []
    },

    reducers: {

        addFavorite(state, action) {

            state.favorites.push(action.payload);
        }

    }
})

export const { addFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;