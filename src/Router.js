import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Words from "./pages/words/Words";
import List from "./pages/list/List";
import Samsung from "./pages/detail/Samsung";
import Detail from "./pages/detail/Detail";
import ListDetail from "./pages/list/ListDetail";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/samsung" element={<Samsung />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/list" element={<List />}></Route>
        <Route path="/listDetail" element={<ListDetail />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
