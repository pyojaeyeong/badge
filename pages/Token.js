import Image from "next/image";
const Token = ({ id, name }) => {
  return (
    <>
      <li>
        <Image src={tokenImg} alt="이미지" width={50} height={50} />
        <p>{name}</p>
      </li>
    </>
  );
};

export default Token;
