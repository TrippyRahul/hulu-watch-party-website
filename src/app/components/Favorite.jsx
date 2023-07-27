import React from "react";
import styles from "../styles/favorite.module.scss";
import Image from "next/image";

const Favorite = () => {
  return (
    <div className={styles.favorite}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles["left-top"]}>
              <div className={styles.headings}>
                <h2>Time Sync</h2>
              </div>
              <div className={styles.desc}>
                <p>
                  Have a fantastic showtime on it with your loved ones! Just log
                  in together and invite your friends. This extension lets you
                  watch shows and movies simultaneously and have audio and video
                  calls while you enjoy it. Enjoy fast buffering and HD video
                  quality on your desktop.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./favorite.svg"
                alt="favorite"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles["bottom-left"]}>
            <div className={styles.bg}>
              <div className={styles["bg-image-container"]}>
                <Image
                  src="./customize-bg.svg"
                  alt="customize-bg"
                  fill={true}
                  className={styles["bg-image"]}
                />
              </div>
            </div>
            <div className={styles["image-container"]}>
              <Image
                src="./customize.svg"
                alt="customize"
                fill={true}
                className={styles.image}
              />
            </div>
          </div>
          <div className={styles["bottom-right"]}>
            <div className={styles.headings}>
              <h2>Craft your perfect party on it</h2>
            </div>
            <div className={styles.desc}>
              <p>
                Customize your party with this extension! Pick a creative user
                icon and unlock awesome features like chat, audio calls, and
                video calls. Get ready to stream your favorite movies with your
                loved ones from the comfort of your own space. This extension
                has top-notch content from your favorite OTT platforms and
                offers high-quality streaming with fantastic features. Share
                your laughter, tears, and cheers together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
