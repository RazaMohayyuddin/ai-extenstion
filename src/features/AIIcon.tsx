import React from "react";
import { useState } from "react";
import Modal from "./Modal"; // Import your Modal feature

const AIIcon = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <div>
      <button className="p-2 m-2 text-white bg-blue-500 rounded-full" onClick={handleClick}>
        AI
      </button>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default AIIcon;