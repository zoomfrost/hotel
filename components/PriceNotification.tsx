import React from "react";

const PriceNotification = ({
  prepayment,
  price,
}: {
  prepayment: number | null;
  price: number | null;
}) => {
  if (prepayment && price) {
    return (
      <div>
        <p>Сумма предоплаты {prepayment} руб.</p>
        <p>К оплате после заезда {price} руб.</p>
      </div>
    );
  }
};

export default PriceNotification;
