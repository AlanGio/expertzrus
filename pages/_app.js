import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
