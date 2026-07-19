import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "./SearchBar";

test("renders the search textbox", () => {
    render(
        <SearchBar
            searchText=""
            setSearchText={() => { }}
        />
    );

    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
});

test("renders the correct placeholder", () => {
    render(
        <SearchBar
            searchText=""
            setSearchText={() => { }}
        />
    );

    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("placeholder", "Search movies...");
});

test("displays the search text passed as a prop", () => {
    render(
        <SearchBar
            searchText="Batman"
            setSearchText={() => { }}
        />
    );

    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("Batman");
});

test("calls setSearchText when the user types", async () => {
    const setSearchText = jest.fn();

    render(
        <SearchBar
            searchText=""
            setSearchText={setSearchText}
        />
    );

    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Batman");

    expect(setSearchText).toHaveBeenCalled();
});