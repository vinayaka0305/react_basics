import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ThemeProvide from "./context/ThemeProvide";

function App() {
  return (
    <>
      <ThemeProvide>
        <Header />
        <Outlet />
      </ThemeProvide>
    </>
  );
}

export default App;
