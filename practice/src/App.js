import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import ThemeProvider from "./components/contextApi/ThemeProvider";
import "./App.css";
import UseReducer from "./pages/UseReducer";
import UseRef from "./pages/UseRef";
import UseMemo from "./pages/UseMemo";
import UseCallback from "./pages/UseCallback";
import StopWatch1 from "./pages/StopWatch1";
import Todo from "./pages/Todo";
import Form from "./pages/Form";
import Performance from "./pages/Performance";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/useReducer" element={<UseReducer />} />
          <Route path="/useRef" element={<UseRef/>} />
          <Route path="/useMemo" element={<UseMemo/>} />
          <Route path="/useCallback" element={<UseCallback/>} />
          <Route path="/st1" element={<StopWatch1/>} />
          <Route path="/todo" element={<Todo/>} />
          <Route path="/form" element={<Form/>} />
          <Route path="/perfomance" element={<Performance/>} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
