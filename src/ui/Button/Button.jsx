import styles from "./Button.module.css";

function Button({
  variation = "primary",
  size = "medium",
  disabled = false,
  onClick,
  children,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variation]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children || "click me"}
    </button>
  );
}
export default Button;
