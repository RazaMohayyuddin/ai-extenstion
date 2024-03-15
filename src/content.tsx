import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import cssText from "data-text:~style.css";
import type { PlasmoCSConfig } from "plasmo";
import AIIcon from "~features/AIIcon";
import Modal from "~features/Modal";
import React from "react";

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
};

export const getStyle = () => {
  const style = document.createElement("style");
  style.textContent = cssText;
  return style;
};

const PlasmoOverlay = () => {
  const [showModal, setShowModal] = useState(false);
  const [messageBoxFocused, setMessageBoxFocused] = useState(false);

  useEffect(() => {
    document.head.appendChild(getStyle());
console.log(document.head.appendChild(getStyle()));
    // const messageBox = document.querySelector('.msg-form__contenteditable [contenteditable="true"] [aria-label="Write a message…"]');
    const messageBox = document.querySelector('.msg-form__contenteditable [contenteditable="true"] [aria-label="Write a message…"]');

    console.log('messageBox', messageBox)

    const handleFocus = () => {
      setMessageBoxFocused(true);
    };

    const handleBlur = () => {
      setMessageBoxFocused(false);
    };

    messageBox?.addEventListener('focus', handleFocus);
    messageBox?.addEventListener('blur', handleBlur);

    return () => {
      messageBox?.removeEventListener('focus', handleFocus);
      messageBox?.removeEventListener('blur', handleBlur);
    };
  }, []);

  useEffect(() => {
    if (messageBoxFocused) {
      const target = document.querySelector('.msg-form__contenteditable [contenteditable="true"] [aria-label="Write a message…"]');
        console.log('Target1', target);
      if (target && !document.querySelector(".plasmo-ai-icon")) {
        const iconContainer = document.createElement("div");
        iconContainer.className = "plasmo-ai-icon";
        target.parentNode.insertBefore(iconContainer, target.nextSibling);

        const root = createRoot(iconContainer);
        // root.render(React.createElement(AIIcon, { onClick: () => setShowModal(true) }));
        root.render(<AIIcon  />)
      }
    } else {
      const iconContainer = document.querySelector(".plasmo-ai-icon");
      console.log('Target', iconContainer);
      if (iconContainer) {
        iconContainer.remove();
      }
    }
  }, [messageBoxFocused, showModal]);

  return (
    <>
      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default PlasmoOverlay;