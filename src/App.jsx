import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Saralanganlar from "./pages/Saralanganlar";
import { Context } from "./context";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";
import DetailPage from "./pages/DetailPage";

export default function App() {
  const [newData, setNewData] = useState(
    localStorage.getItem("newData")
      ? JSON.parse(localStorage.getItem("newData"))
      : {}
  );

  const [like, setLike] = useState(
    localStorage.getItem("like") ? JSON.parse(localStorage.getItem("like")) : []
  );

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  useEffect(() => {
    localStorage.setItem("newData", JSON.stringify(newData));
  }, [newData]);

  return (
    <Context.Provider value={{ like, setLike, newData, setNewData }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/news/:newsId" element={<DetailPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/saralanganlar" element={<Saralanganlar />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}
