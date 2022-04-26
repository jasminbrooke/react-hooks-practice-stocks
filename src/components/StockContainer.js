import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, addStock }) {

  const stocksArray = stocks.map((stock, i) => <Stock stock={stock} addStock={addStock} key={i}/>)

  return (
    <div>
      <h2>Stocks</h2>
        { stocksArray }
        {console.log(stocks)}
    </div>
  );
}

export default StockContainer;
