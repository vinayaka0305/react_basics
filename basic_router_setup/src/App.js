import "./App.css";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "./components/Pages/Home";
import Profile from "./components/Pages/Profile";
import Users from "./components/Pages/Users";
import NotFound from "./components/Pages/NotFound";
import Navbar from "./components/Navbar";
import UsersDetails from "./components/Pages/UsersDetails";
import StopWatch1 from "./components/Pages/StopWatch1";
import StopWatch2 from "./components/Pages/StopWatch2";
import Stopwatch3 from "./components/Pages/Stopwatch3";
import TodoList from "./components/Pages/TodoList";
import TodoList2 from "./components/Pages/TodoList2";

function App() {
  return <Router>
    <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/users/:userid" element={<UsersDetails/>}/>
        <Route path="/stopwatch1" element={<StopWatch1/>}/>
        <Route path="/stopwatch2" element={<StopWatch2/>}/>
        <Route path="/stopwatch3" element={<Stopwatch3/>}/>
        <Route path="/todo" element={<TodoList/>}/>
        <Route path="/todo2" element={<TodoList2/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  </Router>
}

export default App;
