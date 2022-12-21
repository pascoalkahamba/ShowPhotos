import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AllPhotos from "./Components/AllPhotos";
import Photo from "./Components/Photo";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App asnimeLeft">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllPhotos />} />
          <Route path="contato" element={<Contact />} />
          <Route path="produto/*" element={<Photo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
