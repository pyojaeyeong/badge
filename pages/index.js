import Image from "next/image";
import data from "../data.json";
import styles from "../styles/Home.module.css";
const Home = () => {
  return (
    <>
      <div>
        <ul className={styles.tokensList}>
          {data.token.map((token) => (
            <li key={token.id} className={styles.tokens}>
              <Image
                src={`/${token.tokenImg}`}
                width={50}
                height={50}
                alt={token.name}
              />
              <strong>{token.name}</strong>
              <span>{token.game}</span>
              <div>
                <span>{token.dollar}</span>
                <span>{token.rate}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
