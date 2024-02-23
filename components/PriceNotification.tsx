import React from "react";

const PriceNotification = ({
  prepayment,
  fullPrice,
}: {
  prepayment: number | null;
  fullPrice: number | null;
}) => {
  if (prepayment && fullPrice) {
    return (
      <div>
        <p>Сумма предоплаты {prepayment}</p>
        <p>К оплате после заезда {fullPrice}</p>
      </div>
    );
  }
};

export default PriceNotification;
