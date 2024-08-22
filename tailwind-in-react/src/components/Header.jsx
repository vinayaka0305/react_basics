import React, { useState } from "react";
import viteLogo from "/vite.svg";
import { Link, NavLink } from "react-router-dom";
import Modal from "./Modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between py-4 hover:bg-slate-300 px-4 md:px-8 shadow-md">
      <img src={viteLogo} alt="vitelogo" />
      <ul className="flex gap-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-700 underline" : ""
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
        <li>
          <button onClick={() => setIsOpen((prev) => !prev)}>Sign In</button>
          <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
              type="text"
              placeholder="User Name"
              className="grow rounded border border-gray-600 px-2 py-1"
            />
            <input
              type="password"
              placeholder="Password"
              className="grow rounded border border-gray-600 px-2 py-1"
            />
          </Modal>
        </li>
      </ul>
    </header>
  );
};

const h1_virtual = <h1>Hello world</h1>
const h1_real = document.createElement('h1');
h1_real.innerText= 'hello world'
console.log(h1_virtual);
console.dir(h1_real);
export default Header;
