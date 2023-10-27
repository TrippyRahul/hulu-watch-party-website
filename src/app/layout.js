import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Say goodbye to distance and hello to Hulu watch party",
  description:
    "You can stream and enjoy your favorite shows and movies together in real time. Hulu watch party extension is a fantastic way to binge movies together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.huluwatchparty.co/" />
        <meta
          name="google-site-verification"
          content="Grb1WfaBVaPUhKonmtHADFecHPO95vEpDLyhJekO9Ro"
        />

        <meta property="og:url" content="https://www.huluwatchparty.co/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Say goodbye to distance and hello to Hulu watch party "
        />
        <meta
          property="og:description"
          content=" You can stream and enjoy your favorite shows and movies together in real time. Hulu watch party extension is a 
a fantastic way to binge movies together.."
        />
        <meta
          property="og:image"
          content="https://www.huluwatchparty.co/logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="huluwatchparty.co" />
        <meta property="twitter:url" content="https://www.huluwatchparty.co/" />
        <meta
          name="twitter:title"
          content="Say goodbye to distance and hello to Hulu watch party "
        />
        <meta
          name="twitter:description"
          content=" You can stream and enjoy your favorite shows and movies together in real time. Hulu watch party extension is a 
a fantastic way to binge movies together.."
        />
        <meta
          name="twitter:image"
          content="https://www.huluwatchparty.co/logo.svg"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
