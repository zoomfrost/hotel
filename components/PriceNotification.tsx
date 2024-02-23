import React from "react";

const PriceNotification = ({
  prepayment,
  AmountOfDays,
}: {
  prepayment: number[] | null;
  AmountOfDays: number | null;
}) => {
  if (prepayment?.length !== 0 && AmountOfDays) {
    return (
      <div>
        <p>Сумма предоплаты {prepayment} руб.</p>
        <p>К оплате после заезда {AmountOfDays * prepayment![0]} руб.</p>
      </div>
    );
  }
};

export default PriceNotification;
