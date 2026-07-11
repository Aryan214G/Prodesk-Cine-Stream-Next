"use client";
import React from 'react'
import MovieCard from "@/components/MovieCard";
import { useSelector } from 'react-redux';

const Favorites = () => {

    const favorites = useSelector(
        state => state.favorites.favorites
    )

    return (
        <div>
            <h1>My Favorites</h1>

            <div className="grid">

                {
                    favorites.map(movie =>

                        <MovieCard

                            key={movie.id}
                            movie={movie}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Favorites