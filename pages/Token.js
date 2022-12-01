import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import data from "../data.json";
import styles from "../scss/Token.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Token = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <ul className={styles.tokensList}>
        <Slider {...settings} className={styles.slider}>
          {data.token.map((token) => (
            <li
              key={token.id}
              className={`${styles.tokens} ${styles[token.bgColor]}`}
            >
              <Image
                src="/image/badge.png"
                width={112}
                height={112}
                alt="badge"
                className={styles.tokenBadge}
              />
              <span className={styles.badge}>{token.badge}</span>
              <Image
                className={styles.tokenImg}
                src={`/${token.tokenImg}`}
                width={80}
                height={80}
                alt={token.name}
              />
              <strong className={styles.tokenName}>{token.name}</strong>
              <div className={styles.gameList}>
                <span className={styles.tokenGame}>{token.game}</span>
                {!token.tag ? null : (
                  <span className={styles.tag}>{token.tag}</span>
                )}
              </div>
              <div className={styles.price}>
                <span className={styles.tokenDollar}>${token.price}</span>
                <span className={styles.tokenRate}>{token.typevalue}%</span>
              </div>
            </li>
          ))}
        </Slider>
      </ul>
    </>
  );
};

export default Token;
