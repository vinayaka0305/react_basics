import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// import Home from "./components/Home.jsx";
// import Contact from "./components/Contact.jsx";
// import About from "./components/About.jsx";

// const About = lazy(()=> import('./components/About.jsx'))
// const Contact = lazy(()=> import("./components/Contact.jsx"))

const About = lazy(() => import("./components/About.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Home = lazy(() => import("./components/Home.jsx"));
// const About = lazy(() =>
//   wait(1000).then(() => import("./components/About.jsx"))
// );
// const Contact = lazy(() =>
//   wait(1000).then(() => import("./components/Contact.jsx"))
// );
// const Home = lazy(() =>
//   wait(1000).then(() => import("./components/Home.jsx"))
// );

// const wait = (time) => {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res();
//     }, time);
//   });
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
