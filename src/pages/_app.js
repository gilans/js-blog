/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import "@fortawesome/fontawesome-free/css/all.css";

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default App;
