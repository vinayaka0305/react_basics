import React, { useState } from "react";
import Modal from "./Modal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1 className="font-semibold">
        welcome to contact{" "}
        <a
          className="text-blue-400 hover:text-blue-700"
          href="https://www.youtube.com/@procodrr"
          target="_blank"
        >
          Youtube
        </a>
      </h1>
      <button onClick={() => setIsOpen((prev) => !prev)}>Open pop-up</button>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        header={<p className="text-red-700 font-bold">vinayaka</p>}
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="font-semibold px-4 py-1 rounded bg-slate-400"
            >
              Ok
            </button>
          </div>
        }
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsam
        officia sapiente voluptas, omnis consequatur velit maxime voluptate quo
        cum.
      </Modal>
    </>
  );
};

export default Contact;
