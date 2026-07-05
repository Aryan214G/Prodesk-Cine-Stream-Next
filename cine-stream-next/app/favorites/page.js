"use client";
import React from 'react'
import MovieCard from "@/components/MovieCard";
import { useFavorites } from "@/context/FavoritesContext";

const Favorites = () => {
    const { favorites, setFavorites } = useFavorites();
    return (
        <div>
            <h1>My Favorites</h1>

            <div className="grid">

                {
                    favorites.map(movie =>

                        <MovieCard

                            key={movie.id}
                            movie={movie}
                            favorites={favorites}
                            setFavorites={setFavorites}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites