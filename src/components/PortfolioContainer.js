import React from "react";
import Stock from "./Stock";

function PortfolioContainer( { portfolio, removeStock }) {

  const portfolioArray = portfolio.map((stock,i)=> <Stock stock={ stock } removeStock={ removeStock } key={ i } />);


  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioArray}
    </div>
  );
}

export default PortfolioContainer;
