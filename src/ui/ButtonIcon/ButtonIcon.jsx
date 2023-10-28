import styles from "./ButtonIcon.module.css";

function ButtonIcon({ disabled, onClick, children }) {
  return (
    <button disabled={disabled} onClick={onClick} className={styles.icon}>
      {children}
    </button>
  );
}

export default ButtonIcon;
