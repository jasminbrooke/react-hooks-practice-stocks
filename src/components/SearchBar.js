import React, { useState } from "react";

function SearchBar({ filterStocks, sortStocks }) {

  const [filter, setFilter] = useState("Tech");
  const [sort, setSort] = useState(null);

  const handleSelect = e => {
    setFilter(e.target.value)
    filterStocks(e.target.value)
  }

  const handleSort = sortType => {
    if(sortType === "alphabetical") {
      setSort("alphabetical")
  } else {
      setSort("price")
  }

    sortStocks(sortType);
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={ sort === "alphabetical" }
          onChange={ () => handleSort("alphabetical") }
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={ sort === "price" }
          onChange={ () => handleSort("price") }
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select value={ filter } onChange={handleSelect}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
