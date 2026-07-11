"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { setFavorites } from "./slices/favoritesSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function StoreProvider({ children }) {

    function StoreInitializer({ children }) {
        const dispatch = useDispatch();

        useEffect(() => {
            const saved = localStorage.getItem("favorites");

            if (saved) {
                dispatch(setFavorites(JSON.parse(saved)));
            }
        }, [dispatch]);

        return children;
    }

    return (
        <Provider store={store}>
            <StoreInitializer>
                {children}
            </StoreInitializer>
        </Provider>
    );
}