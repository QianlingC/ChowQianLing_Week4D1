import React from "react";
import { Box } from "./stories/Box";
import { Header } from "./stories/Header";
import { Footer } from "./stories/Footer";

import Form from "./Form";

const App = () => {
  return (
    <>
      <Header user />
      <Form />
      <Box />
      <Footer />
    </>
  );
};
export default App;
