import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, setIsOpen, header, footer,children }) => {
  return createPortal(
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={`fixed inset-0 flex items-center justify-center bg-black/40 px-4  ${isOpen ? "" : "hidden"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl grow rounded-lg bg-white p-4 shadow-lg"
      >
        {header}
        <div className="mx-4 my-3 flex flex-wrap gap-4 border-y p-4 shadow-lg">
         {children}
        </div>
        {footer}
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
