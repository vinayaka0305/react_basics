import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import UseRed from './components/UseRed.jsx';
import UseRef from './components/UseRef.jsx';
import UseMemo from './components/UseMemo.jsx';
import UseCallBack from './components/UseCallBack.jsx';
import CustomHook from './components/CustomHook.jsx';
import AxiosUses from './components/AxiosUses.jsx';
import MultipleInputFormStates from './components/MultipleInputFormStates.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/useReducer",
        element:<UseRed/>
      },
      {
        path:"/useRef",
        element:<UseRef/>
      },
      {
        path:"/useMemo",
        element:<UseMemo/>
      },
      {
        path:"/useCallBack",
        element:<UseCallBack/>
      },
      {
        path:"/customHook",
        element:<CustomHook/>
      },
      {
        path:"/axios",
        element:<AxiosUses/>
      },
      {
        path:"/forms",
        element:<MultipleInputFormStates/>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
