import React from "react";
import styles from "../styles/about.module.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.headings}>
              <h2>About</h2>
            </div>
            <div className={styles.desc}>
              <p>
                This extension offers the best streaming service for its
                subscribers. It lets you watch movies and TV shows together in
                real time with your friends and family. You can synchronize your
                playback and use chat, audio, and video calls to interact and
                discuss the content while watching from different places. It&apos;s a
                fun way to enjoy content together, even if you&apos;re far apart.
              </p>
              <p>
                To use it, you need a valid account and to install the browser
                extension. Once installed, the extension generates a special URL
                that the host shares with friends or family to invite them to
                join the party. Once everyone is connected, the host starts the
                movie or show, and all screens synchronize, so everyone watches
                the same content at the same time. It&apos;s a seamless and enjoyable
                way to watch together, no matter how far apart you are.
              </p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles["image-container"]}>
              <Image
                src="./about.svg"
                alt="about"
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

export default About;
