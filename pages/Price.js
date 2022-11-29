import data from "../data.json";

const Price = () => {
  return (
    <>
      <ul>
        <li key={data.rate.id}>
          <span>{data.rate.price}</span>
          <span>{data.rate.variation}</span>
        </li>
      </ul>
    </>
  );
};

export default Price;
