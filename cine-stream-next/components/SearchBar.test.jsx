import { render, screen } from "@testing-library/react";
import SearchBar from "./SearchBar";

test("renders the search textbox", () => {
  render(
    <SearchBar
      searchText=""
      setSearchText={() => {}}
    />
  );

  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();
});