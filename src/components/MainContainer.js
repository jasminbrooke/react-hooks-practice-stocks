import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filteredStocks, setFilteredStocks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => {
    setStocks(data)
    setFilteredStocks(data)
    })
  }, [])

  const filterStocks = filter => {
    const filteredArray = stocks.filter(stock=> stock.type === filter)
    setFilteredStocks(filteredArray);
  }

  const sortStocks = sortType => {
    if(sortType === "alphabetical") {
      const sortedArray = [...filteredStocks].sort((a, b) => {
      if (a.name < b.name) {
        return - 1;
    } else if (a.name > b.name) {
        return 1;
      } else {
        return 0;
      }
    })
     setFilteredStocks(sortedArray);
    } else {
      const sortedArray = [...filteredStocks].sort((a, b) => a.price - b.price)
      setFilteredStocks(sortedArray);
    }
  }

  const addStock = stock => {
    setPortfolio([...portfolio, stock])
  }

  const removeStock = stock => {
    const filteredArray = portfolio.filter(st => st.id !== stock.id);
    setPortfolio(filteredArray);
  }

  return (
    <div>
      <SearchBar filterStocks={ filterStocks } sortStocks={sortStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={ filteredStocks } addStock={addStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer removeStock={removeStock} portfolio={ portfolio }/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
