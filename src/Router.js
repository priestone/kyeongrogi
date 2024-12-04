import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Words from "./pages/words/Words";
import List from "./pages/list/List";
import Samsung from "./pages/themes/Samsung";
import Detail from "./pages/detail/Detail";
import ListDetail from "./pages/list/ListDetail";
import Sk from "./pages/themes/Sk";
import Kakao from "./pages/themes/Kakao";
import Hanwha from "./pages/themes/Hanwha";
import Gs from "./pages/themes/Gs";
import Notice from "./pages/Notice";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/samsung" element={<Samsung />}></Route>
        <Route path="/sk" element={<Sk />}></Route>
        <Route path="/kakao" element={<Kakao />}></Route>
        <Route path="/hanwha" element={<Hanwha />}></Route>
        <Route path="/gs" element={<Gs />}></Route>
        <Route path="/notice" element={<Notice />}></Route>

        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/listDetail" element={<ListDetail />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
