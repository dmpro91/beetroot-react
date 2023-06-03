import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Main } from "./components/Main/Main";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { News } from "./pages/News";
import { User } from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news" element={<News />} />
            <Route path="/user" element={<User />} />
          </Routes>
        </Main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
