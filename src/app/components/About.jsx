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
                It is a fantastic tool that provides the best services to all
                its users. In this extension, you will find vast varieties of
                movies and shows and watch them with your family and friends
                together. It has features like chatting, audio, and video calls
                so that you can discuss your favorite scene with them. It is the
                best way to have a unique experience.
              </p>
              <p>
                To experience its great features, you just need an account on
                Hulu and install it on your browser. After installing it, you
                can generate a URL link and share it with your loved ones. With
                this link, you can invite them to watch a party. Remember only
                the host has all the powers to play or pause the video. It also
                synchronizes playback so that you can watch it together. No
                matter how far apart you are from your friends, within just a
                few seconds you can watch a movie with them.
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
