"use client";

import React, { useState } from "react";
import styles from "../styles/accordian.module.scss";
import Button from "../components/Button";
import Image from "next/image";

const questions = [
  {
    id: 1,
    ques: "How to watch your favorite content on this extension?",
    ans: "It is a very simple and quick process, it’s just you need to install the extension. It synchronizes the playback and allows you to have incredible features like chat, audio, and video calls. So, without hassle, you can now discuss your favorite part while watching a movie together.",
  },
  {
    id: 2,
    ques: "Can two people watch Hulu at the same time?",
    ans: "Yes, with our extension, two people can watch at the same time.",
  },
  {
    id: 3,
    ques: "How to watch party on hulu?",
    ans: "The process is straightforward and easy. Install the extension and log in to your account. Then, open and choose the content you want to watch. If you prefer, you can create your own watch party and share the unique URL with your friends and family. This way, everyone can synchronize their playback and chat together while enjoying the content simultaneously. It's a simple and convenient way to watch movies and shows with your loved ones, no matter where they are.",
  },
  {
    id: 4,
    ques: "How to watch Hulu with friends? ",
    ans: "To stream with friends, just install the extension add it to Chrome then activate it. After logging in to your account you can share the URL line with your friends to synchronize playback and chat while watching a movie.",
  },
  {
    id: 5,
    ques: "Can you share your screen with your screen share Hulu? ",
    ans: "Yes, you can definitely share your screen with our extension and enjoy Hulu shareplay.",
  },
  {
    id: 6,
    ques: "Can you share Hulu account?",
    ans: "With our extension, you can share your valid account with your friends. ",
  },
  {
    id: 7,
    ques: "Does it has watch party? ",
    ans: "With our extension, it offers a watch party feature, allowing you to enjoy watching shows and movies together with your friends in a group.",
  },
];

const Accordian = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (questionId) => {
    if (showAnswer === questionId) {
      setShowAnswer(null);
    } else {
      setShowAnswer(questionId);
    }
  };

  return (
    <div className={styles.accordian}>
      <div className={styles.container}>
        <h2>FREQUENTLY ASKED QUESTION</h2>

        <ol>
          {questions.map((question) => (
            <li key={question.id} onClick={() => toggleAnswer(question.id)}>
              <div className={styles.question}>
                <p>{question.ques}</p>
                <div className={styles["image-container"]}>
                  <Image
                    src="./addLogo.svg"
                    alt="add-logo"
                    fill={true}
                    className={styles.image}
                  />
                </div>
              </div>
              {showAnswer === question.id && (
                <div
                  className={`${styles.answer} ${
                    showAnswer === question.id ? styles.active : ""
                  }`}
                >
                  <p>{question.ans}</p>
                </div>
              )}

              {/*
               */}
            </li>
          ))}
        </ol>
        <Button />
      </div>
    </div>
  );
};

export default Accordian;
