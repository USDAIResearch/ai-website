"use client";
import { useEffect, useState } from "react";
import { filterResearchPaper } from "@/app/actions/home/action";
import Loader from "../commons/Loader";
import HeroIcon from "../commons/HeroIcon";

const SearchBar = ({ setContentFeed, filters, setFilters }) => {
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    let debounceTimer;
    if (isTyping) {
      debounceTimer = setTimeout(async () => {
        const searchResults = await filterResearchPaper(filters);
        setContentFeed(searchResults);
        setIsTyping(false);
      }, 500);
    }

    return () => clearTimeout(debounceTimer);
  }, [filters, isTyping, setContentFeed]);

  const handleChange = (e) => {
    e.preventDefault();
    setFilters({ ...filters, searchTerm: e.target.value });
    setIsTyping(true);
  };

  const handleClear = () => {
    setFilters({ ...filters, searchTerm: "" });
    setIsTyping(false);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          className={`appearance-none px-10 w-full p-3 text-gray-800 leading-tight border-gray-200 ${
            isTyping ? "pr-10" : ""
          }`}
          type="text"
          value={filters.searchTerm}
          onChange={handleChange}
          placeholder="Search for research papers . . ."
        />
        {filters.searchTerm && (
          <div
            className="absolute right-0 inset-y-0 flex items-center px-1 cursor-pointer"
            onClick={handleClear}
          >
            <HeroIcon name="XMarkIcon" />
          </div>
        )}
        <div className="absolute left-0 inset-y-0 flex items-center px-2 cursor-pointer">
          {isTyping ? (
            <Loader hideText={true} />
          ) : (
            <HeroIcon name="MagnifyingGlassIcon" />
          )}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
