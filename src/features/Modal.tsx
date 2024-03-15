import React from "react";
import { useState } from "react";

const Modal = ({ onClose }) => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const insertResponse = () => {
    const messageField = document.querySelector('textarea[aria-label="Write a message…"]');
    if (messageField) {
      messageField.value = response;
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-40">
      <div className="max-w-sm p-5 bg-white rounded-lg">
        <textarea
          className="w-full p-2 border"
          placeholder="Your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 text-white bg-blue-500 rounded" onClick={() => setResponse("Generated response for: " + prompt)}>Generate</button>
          <button className="px-4 py-2 text-white bg-green-500 rounded" onClick={insertResponse}>Insert</button>
          <button className="px-4 py-2 text-white bg-red-500 rounded" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;