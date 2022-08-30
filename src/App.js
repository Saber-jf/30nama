import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleFilm from "./pages/SingleFilm";
import ContentsPage from "./pages/ContentsPage";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleFilm />} />
        <Route path="/genre/:genre/:id" element={<ContentsPage />} />
        <Route path="search/:searchKey" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
