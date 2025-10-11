import React from "react";
import "./SearchBar.scss";
import { useSearchStore } from "../../../shared/store";
import { searchIcon } from "../../../assets";
import type { SearchBarProps } from "../types/search-bar.types";

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Ürün Ara" }) => {
  const { setSearchTerm, searchTerm } = useSearchStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <img src={searchIcon} alt="Search" className="search-icon" />
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        className="search-input"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        Ara
      </button>
    </form>
  );
};

export default SearchBar;
