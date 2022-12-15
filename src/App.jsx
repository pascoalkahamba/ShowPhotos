import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllPhotos from "./Components/AllPhotos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllPhotos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
