import { createSlice } from "@reduxjs/toolkit";


const favoritesSlice = createSlice({

    name: "favorites",

    initialState: {

        favorites: []
    },

    reducers: {

        addFavorite(state, action) {

            state.favorites.push(action.payload);

            localStorage.setItem(
                "favorites",
                JSON.stringify(state.favorites)
            )
        },

        removeFavorite(state, action) {
            state.favorites = state.favorites.filter(
                favorite => favorite.id !== action.payload
            )

            localStorage.setItem(
                "favorites",
                JSON.stringify(state.favorites)
            )
        },

        setFavorites(state, action) {
            state.favorites = action.payload;
        }

    }
})

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;