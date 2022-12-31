import React, { useState } from "react";
import { chipsData } from "../../constants/constant";
import "../TableList/table.css";
import { AiOutlineStar } from "react-icons/ai";
import Table from "../Table/Table";

export const TableList = () => {
  const [inputSelectValue, setInputSelectValue] = useState(10);
  return (
    <div className="cryptoCurr-container flex-center flex-column">
      <div className="filter-chips flex-center flex-column">
        <h2>Top 100 Cryptocurrencies by Market Cap</h2>
        <div className="chips-container flex-center">
          {chipsData.map((item) => {
            return (
              <div key={item} className="chip-style">
                {item === "Favourites" ? (
                  <span className="flex-center gutter">
                    <AiOutlineStar /> {item}
                  </span>
                ) : (
                  <span
                    style={{ color: item === "Cryptocurrencies" && "blue" }}
                  >
                    {item}
                  </span>
                )}
              </div>
            );
          })}
          <div className="rows-filter flex-center gutter-lg">
            <p>show rows</p>
            <select
              className="rows-option"
              name="row-filter"
              id="row-filter"
              onChange={(e) => setInputSelectValue(e.target.value)}
            >
              <option value="10" className="list">
                10
              </option>
              <option value="20" className="list">
                20
              </option>
              <option value="50" className="list">
                50
              </option>
            </select>
          </div>
        </div>
      </div>
      <Table pagesize={inputSelectValue} />
    </div>
  );
};
