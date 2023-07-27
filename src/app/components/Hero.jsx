import React from "react";
import styles from "../styles/Hero.module.scss";
import Button from "./Button";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles["inner-container"]}>
              <div className={styles.headings}>
                <h1>Stream Your Favorites With this extension</h1>
              </div>
              <div className={styles.text}>
                <p>
                  Experience the joy of watching your favorite movies and TV
                  shows with your family and friends using teleparty. You can
                  invite your Hulu friends and enjoy the entertainment together.
                  With synchronized playback, you can chat and make audio or
                  video calls while watching a movie, as if you&apos;re all in
                  the same room. With the watch party Hulu, you can create fun
                  memories and share the excitement of watching together, even
                  if you are far away from each other.
                </p>
              </div>
              <div className={styles.btn}>
                <Button />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
