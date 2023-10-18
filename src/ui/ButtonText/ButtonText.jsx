import styles from "./ButtonText.module.css";

function ButtonText({ disabled = false, onClick, children }) {
  return (
    <button className={styles.btnText} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonText;
