import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Header />
      <main className="py-4 px-4 md:px-8">
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default App;
