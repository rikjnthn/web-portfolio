import React, { Suspense } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { Navigation, About, Portfolio, PageNotFound } from "../components";
import Loading from "../components/Loading";
import customTheme from "../components/global-style";
import "../App.css";

const App = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Suspense fallback={<Loading />}>
        <BrowserRouter basename="web-portfolio">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route path="/" element={<Portfolio />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ChakraProvider>
  );
};

export default App;
