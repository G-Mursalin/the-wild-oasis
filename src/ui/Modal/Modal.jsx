import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { HiXMark } from "react-icons/hi2";
import { cloneElement, createContext, useContext, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

// Create Context
const ModalContext = createContext();

// Parent Component
function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// Child Components
function Open({ opens: opensWindowName, children }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const { ref } = useOutsideClick(close);

  if (openName != name) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div ref={ref} className={styles.modal}>
        <button onClick={close} className={styles.closeButton}>
          <HiXMark />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

// Add child components as properties to parent component
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
