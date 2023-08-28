import React from "react";
import styles from "../styles/join.module.scss";
import Button from "./Button";
import Image from "next/image";

const Join = () => {
  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <h2>How to join this extension</h2>
        <div className={styles.content}>
          <div className={styles.timeline}>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className={styles["image-container"]}>
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>Go to your web browser and install the extension</p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>
                  After installing it, activate your valid account on it, then
                  you will get the invitations from your dear ones
                </p>
                <div
                  className={styles["image-container"]}
                  style={{ marginBottom: "-.6rem" }}
                >
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className={styles["image-container"]}>
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>
                  Click on the link that they have sent to you or simply enter
                  the code
                </p>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}>
                <p>Join the party</p>
                <div
                  className={styles["image-container"]}
                  style={{ marginBottom: "-.6rem" }}
                >
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle2.svg"
                    alt="semi-circle"
                  />
                </div>
              </div>
              <div className={styles.second}></div>
            </div>
            <div className={styles.item}>
              <div className={styles.first}></div>
              <div className={styles.second}>
                <div className={styles["image-container"]}>
                  <Image
                    fill={true}
                    className={styles.image}
                    src="./semi-circle1.svg"
                    alt="semi-circle"
                  />
                </div>
                <p>Interact with them via chat, audio calls, and video calls</p>
              </div>
            </div>
          </div>
        </div>
        <p>
          To enjoy unlimited streaming on it, it’s just you need to have a valid
          subscription to your streaming account, where the content is
          available.
        </p>
      </div>
    </div>
  );
};

export default Join;
