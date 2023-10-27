import React from "react";
import styles from "../styles/benefits.module.scss";
import Button from "./Button";
import Image from "next/image";

const Benefits = () => {
  return (
    <div className={styles.benefits} id="features">
      <div className={styles.container}>
        <div className={styles.right}>
          <div className={styles.top}>
            <div className={styles.headings}>
              <h2>Watch unlimited streaming websites with teleparty Hulu</h2>
            </div>
            <div className={styles.desc}>
              <p>
                It allows you to group watch on Hulu and has unlimited shows and
                series. Unlock amazing features including chat, audio, and video
                calls. The best part is no matter where you are, with just a few
                clicks, you can watch it with your family and friends.
              </p>
            </div>
            <div className={styles.btn}>
              <Button />
            </div>
          </div>
        </div>
        <div className={styles.left}>
          <div className={styles["image-container"]}>
            <Image
              src="/benefits.png"
              alt="benefits"
              fill={true}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
