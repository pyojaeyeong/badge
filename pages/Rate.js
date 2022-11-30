import { useState } from "react";

const Rate = () => {
  const rate = [
    {
      id: 1,
      type: "increase",
      value: 9.66,
    },
    {
      id: 2,
      type: "increase",
      value: 9.66,
    },
    {
      id: 3,
      type: "increase",
      value: 9.66,
    },
    {
      id: 4,
      type: "increase",
      value: 9.66,
    },
    {
      id: 5,
      type: "increase",
      value: 9.66,
    },
  ];
  return (
    <>
      <span>{rate.value}</span>
    </>
  );
};

export default Rate;
