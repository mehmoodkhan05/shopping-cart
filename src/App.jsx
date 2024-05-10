import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header, Footer } from "./components/index";
import Main from "./components/containers/Main";
import { Products, Cart } from "./components/containers/index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} exact>
            <Route index element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
