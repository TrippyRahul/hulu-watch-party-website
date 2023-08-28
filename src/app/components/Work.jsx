import React from "react";
import styles from "../styles/work.module.scss";
import Image from "next/image";

const Work = () => {
  return (
    <>
      <div className={styles.work} id="how-it-works">
        <div className={styles.container}>
          <h2 id="work">How to watch this extension on your browser</h2>

          <p>
            Just download and install the extension to your web browser and log
            in to your Hulu account. Select your favorite content. You can also
            share the link with your friends and family to watch movies and
            series together.
          </p>
        </div>
      </div>
    </>
  );
};

export default Work;
