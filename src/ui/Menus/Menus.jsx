import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styles from "./Menus.module.css";
import { useOutsideClick } from "../../hooks/useOutsideClick";

// Create Context
const MenusContext = createContext();

// Parent Component
function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

// Child Components
function Menu({ children }) {
  return <div className={styles.menu}>{children}</div>;
}

function Toggle({ id }) {
  const { openId, close, open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    const rect = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.width - rect.x,
      y: rect.y + rect.height + 8,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <button className={styles.toggleButton} onClick={handleClick}>
      <HiEllipsisVertical />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const { ref } = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      className={styles.list}
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      ref={ref}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, icon, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button className={styles.button} onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </button>
    </li>
  );
}

// Add child components as properties to parent component
Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
