import React from "react";
import "../Modal/modal.css";
import { IoClose } from "react-icons/io5";
import "../TableList/table.css";
import {
  AiFillCaretDown,
  AiFillCaretUp,
  AiOutlineArrowDown,
} from "react-icons/ai";

const Modal = ({ setIsOpen, modalData }) => {
  const {
    image,
    current_price,
    price_change_percentage_24h_in_currency,
    price_change_percentage_7d_in_currency,
    market_cap,
    total_volume,
    symbol,
    circulating_supply,
    low_24h,
  } = modalData;

  return (
    <div className="modal-background hidden-modal">
      <div className="modal-container coin-list-data-modal flex-center flex-column">
        <div className="coin-data-with-close flex-center">
          <div className="flex-center data-with-image gutter-md">
            <img src={image} alt={image} className="coin-image" />
            <span className="coin-name">{modalData.name}</span>
          </div>
          <IoClose onClick={() => setIsOpen(false)} />
        </div>

        <div className="content-container flex-center">
          <div className="flex-center flex-column">
            <span className="align-left">Price</span>
            <span className="span-style">$ {current_price}</span>
          </div>
          <div className="flex-center flex-column">
            <span className="align-left ml-3">24H</span>
            <span className="color-red">
              <AiFillCaretDown />${" "}
              {price_change_percentage_24h_in_currency.toFixed(2)}
            </span>
          </div>
          <div className="flex-center flex-column">
            <span className="align-left ml-3">7D</span>
            <span className="color-green">
              <AiFillCaretUp />${" "}
              {price_change_percentage_7d_in_currency.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="content-container ">
          <div className="flex-center flex-column">
            <span className="align-left">Market Cap</span>
            <span className="align-left">$ {market_cap}</span>
          </div>
        </div>

        <div className="content-container">
          <div className="flex-center flex-column">
            <span className="align-left">Volume (24H)</span>
            <span className="align-left">
              $ {total_volume}{" "}
              <span className="color-gray">{`(${low_24h} ${symbol})`}</span>
            </span>
          </div>
        </div>

        <div className="content-container">
          <div className="flex-center flex-column">
            <span className="align-left">circulating supply</span>
            <span className="align-left">$ {circulating_supply}</span>
            <img
              src="https://ik.imagekit.io/qrhnvir8bf0/Vector_XI9fMu2Vl.png?ik-sdk-version=javascript-1.4.3&updatedAt=1672412815202"
              alt="supplybar"
              className="align-left mt-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
