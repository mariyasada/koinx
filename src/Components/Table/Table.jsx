import React, { useState, useEffect } from "react";
import { useCoinList } from "../../context/CoinContext";
import "../TableList/table.css";
import "../Table/pagination.css";
import {
  AiOutlineStar,
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaBackward, FaForward } from "react-icons/fa";
import Modal from "../Modal/Modal";

const Table = ({ pagesize }) => {
  const { coinList, isLoading } = useCoinList();
  const coinsperPage = pagesize;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (coinList.length > 0) {
      setTotalPages(Math.ceil(coinList.length / coinsperPage));
    }
  }, [coinList, coinsperPage]);

  const endIndex = coinsperPage * currentPage;
  const startIndex = endIndex - coinsperPage;
  const paginatedCoins = coinList?.slice(startIndex, endIndex);

  const popupHandler = (coin) => {
    setIsOpen(true);
    setModalData(coin);
  };
  return (
    <div className="table-container flex-center flex-column">
      <table className="table">
        <thead>
          <tr className="table-row border-gray">
            <th className="table-heading"></th>
            <th className="table-heading hidden">#</th>
            <th className="table-heading">Name</th>
            <th className="table-heading">Price</th>
            <th className="table-heading flex-center ml-3 ">
              24H <AiOutlineArrowDown />
            </th>
            <th className="table-heading hidden">7D</th>
            <th className="table-heading hidden">Market Cap</th>
            <th className="table-headingx hidden">Volume(24H)</th>
            <th className="table-heading hidden">Circulating Supply</th>
            <th className="table-heading hidden"></th>
          </tr>
        </thead>
        {isLoading ? (
          <tbody>
            <tr>
              <td>
                <p>Loading Data...</p>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {paginatedCoins.map((coin, index) => {
              return (
                <tr
                  key={coin.name}
                  className="table-content-row border-gray"
                  onClick={() => popupHandler(coin)}
                >
                  <td className="table-row-data color-gray  ">
                    <AiOutlineStar size={20} />
                  </td>
                  <td className="table-row-data color-gray hidden">
                    {index + 1}
                  </td>
                  <td className="table-row-data cell-data-center flex-center">
                    <img
                      src={coin.image}
                      className="coin-image"
                      alt="crypto-coin"
                    />
                    <span>{coin.name}</span>
                    <span className="crypto-symbol">{coin.symbol}</span>
                  </td>
                  <td className="table-row-data ">
                    <span className="">$</span>
                    {coin.current_price}
                  </td>
                  <td className="table-row-data flex-center color-red">
                    <AiFillCaretDown className="color-red" size={15} />
                    {coin.price_change_percentage_24h.toFixed(3)}%
                  </td>
                  <td className="table-row-data hidden color-green">
                    <AiFillCaretUp className="color-green" size={15} />
                    {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                  </td>
                  <td className="table-row-data hidden">$ {coin.market_cap}</td>
                  <td className="table-row-data mt-3 hidden">
                    $ {coin.total_volume}
                    <p className="supply-volume color-gray ">
                      {coin.circulating_supply.toFixed(0)}
                      <span className="crypto-symbol">{coin.symbol}</span>
                    </p>
                  </td>
                  <td className="table-row-data  hidden last-column-style">
                    <span className="circulate-supply">
                      {coin.circulating_supply.toFixed(0)}
                      <span className="crypto-code">{coin.symbol}</span>
                    </span>
                    <img
                      src="https://ik.imagekit.io/qrhnvir8bf0/Vector_XI9fMu2Vl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672412815202"
                      alt="supply-bar"
                    />
                  </td>
                  <td className="table-row-data hidden">
                    <BiDotsVerticalRounded />
                  </td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
      {totalPages > 1 ? (
        <div className="paginate-container">
          <button
            className={`btn-paginate ${
              currentPage === 1 ? "disabled-cursor" : "cursor"
            }`}
            onClick={() =>
              currentPage !== 1 &&
              setCurrentPage((currentPage) => currentPage - 1)
            }
          >
            <FaBackward />
          </button>
          {[...Array(totalPages)].map((page, index) => (
            <button
              key={index}
              className={`btn-paginate ${
                currentPage === index + 1 ? "primary-btn" : "secondary-btn"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={`btn-paginate ${
              currentPage === totalPages ? "disabled-cursor" : "cursor"
            }`}
            onClick={() =>
              currentPage !== totalPages && setCurrentPage(currentPage + 1)
            }
          >
            <FaForward />
          </button>
        </div>
      ) : null}
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalData={modalData}
          className="modal-hidden"
        />
      )}
    </div>
  );
};

export default Table;
