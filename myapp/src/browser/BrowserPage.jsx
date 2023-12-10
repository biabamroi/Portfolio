import React from "react";
import "./BrowserPage.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Page/MainPage";

const BrowserPage = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default BrowserPage;
