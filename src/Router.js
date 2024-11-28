import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/Header";
import Words from "./pages/words/Words";
import List from "./pages/list/List";

const Router = () => {
  return (
    <HashRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/words" element={<Words />}></Route>
        <Route path="/list" element={<List />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
