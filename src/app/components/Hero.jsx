"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
  const [bgClass, setBgClass] = useState("");

  return (
    <div className={`${styles.hero}`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <h1>Stream Your Favorites With this extension</h1>
            <p>
              Experience the joy of watching your favorite movies and TV shows
              with your family and friends using teleparty. Invite your Hulu
              friends to stream together. It has fun features like you can make
              audio and video calls or even chat in between. You can also
              discuss your favorite movie scenes with your friends and family.
              With Watch Party Hulu you can create your own memories and share
              them while watching a series together. So, what is bothering you?
              Open the link and watch it together.
            </p>
            <Button />
          </div>
          <div className={styles.right}>
            <div className={styles[`image-container`]}>
              <Image
                src={`/hero-img.png`}
                alt="hero-img"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
