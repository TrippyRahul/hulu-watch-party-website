import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How to watch your favorite content on this extension?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is a very simple and quick process, it’s just you need to install the extension. It synchronizes the playback and allows you to have incredible features like chat, audio, and video calls. So, without hassle, you can now discuss your favorite part while watching a movie together.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can two people watch Hulu at the same time?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, with our extension, two people can watch at the same time.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch party on hulu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The process is straightforward and easy. Install the extension and log in to your account. Then, open and choose the content you want to watch. If you prefer, you can create your own watch party and share the unique URL with your friends and family. This way, everyone can synchronize their playback and chat together while enjoying the content simultaneously. It's a simple and convenient way to watch movies and shows with your loved ones, no matter where they are.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch Hulu with friends?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To stream with friends, just install the extension add it to Chrome then activate it. After logging in to your account you can share the URL line with your friends to synchronize playback and chat while watching a movie.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you share your screen with your screen share Hulu?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, you can definitely share your screen with our extension and enjoy Hulu shareplay.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you share Hulu account?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "With our extension, you can share your valid account with your friends.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it has watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "With our extension, it offers a watch party feature, allowing you to enjoy watching shows and movies together with your friends in a group.",
                  },
                },
              ],
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;
