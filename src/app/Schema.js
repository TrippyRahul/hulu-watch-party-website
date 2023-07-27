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
                  name: "Does hbo max have watch party?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it has a party.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can you screen share hbo max?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, while using this tool you can hbo max screen share with your close ones.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to screenshare hbo max?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To screen share, download the extension and use a screen-sharing application or feature on your device during playback and let others view the content in real-time. Please ensure you comply with it’s terms of service and any copyright regulations when sharing content",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch party hbo Max? ",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Install the extension on your browser. Here, you will get a watch party feature to join and enjoy synchronized playback and chat or you can even make an audio and video call while watching movies or shows together in real time. It’s just you need to have your valid account to start the process. ",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to watch hbo max together?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "To watch it together, use the Watch Party feature on the platform, invite friends or family to join, and enjoy synchronized viewing and chat for a shared streaming experience.",
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
