import React from "react";

export default function Card({cardNumber, cardHolderName, data}) {
  return (
    <div className="left_container">
      <div className="cardInio">
        <h1 className="card_numbers_h1">{cardNumber}</h1>
        <span className="card_txts">
          <p>{cardHolderName}</p>
          <p>{data}</p>
        </span>
      </div>
    </div>
  );
}
