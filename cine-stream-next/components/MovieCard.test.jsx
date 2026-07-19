import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import userEvent from "@testing-library/user-event";

import { useSelector, useDispatch } from "react-redux";
import {
    addFavorite,
    removeFavorite,
} from "@/store/slices/favoritesSlice";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock("@/store/slices/favoritesSlice", () => ({
    addFavorite: jest.fn(),
    removeFavorite: jest.fn(),
}));

const movie = {
    id: 1,
    title: "The Dark Knight",
    poster_path: "/poster.jpg",
    release_date: "2008-07-18",
    vote_average: 9.0,
};

const dispatch = jest.fn();

beforeEach(() => {
    useSelector.mockImplementation(callback =>
        callback({
            favorites: {
                favorites: [],
            },
        })
    );

    useDispatch.mockReturnValue(dispatch);

    addFavorite.mockReturnValue({
        type: "favorites/addFavorite",
        payload: movie,
    });

    removeFavorite.mockReturnValue({
        type: "favorites/removeFavorite",
        payload: movie.id,
    });
});

test("renders the movie title", () => {
    render(<MovieCard movie={movie} />);

    expect(
        screen.getByText("The Dark Knight")
    ).toBeInTheDocument();
});

test("renders the release year", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByText("2008")).toBeInTheDocument();
});

test("renders the movie rating", () => {
    render(<MovieCard movie={movie} />);

    expect(screen.getByText("⭐ 9.0")).toBeInTheDocument();
});

test("renders the movie poster", () => {
    render(<MovieCard movie={movie} />);

    const image = screen.getByAltText("The Dark Knight");

    expect(image).toBeInTheDocument();

    expect(image).toHaveAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500/poster.jpg"
    );
});

test("shows 'No Poster' when poster_path is missing", () => {
    const movieWithoutPoster = {
        ...movie,
        poster_path: null,
    };

    render(<MovieCard movie={movieWithoutPoster} />);

    expect(screen.getByText("No Poster")).toBeInTheDocument();
});

test("dispatches addFavorite when the favorite button is clicked", async () => {
    render(<MovieCard movie={movie} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(addFavorite).toHaveBeenCalledWith(movie);

    expect(dispatch).toHaveBeenCalledWith({
        type: "favorites/addFavorite",
        payload: movie,
    });
});

test("dispatches removeFavorite when the movie is already a favorite", async () => {
    useSelector.mockImplementation(callback =>
        callback({
            favorites: {
                favorites: [movie],
            },
        })
    );

    render(<MovieCard movie={movie} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(removeFavorite).toHaveBeenCalledWith(movie.id);

    expect(dispatch).toHaveBeenCalledWith({
        type: "favorites/removeFavorite",
        payload: movie.id,
    });
});