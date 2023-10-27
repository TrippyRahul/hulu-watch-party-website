import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="/favorite.png"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Time Sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Have the ideal showtime with your loved ones. Download and
                  install the extension and log in together. With this useful
                  gadget, you can watch your favorite movies. Additionally, you
                  can also chat, audio, and video calls while streaming series.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Create your own party</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Now, you can create your own party in this extension. It’s just
                you have to click on the party icon and unlock its features. In
                this extension, there is a huge variety of top content with
                high-quality videos and synchronized playback.
              </p>
            </div>
          </div>
          <div className={styles["bottom-left"]}>
            <div className={styles["image-container"]}>
              <Image
                src="/customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
