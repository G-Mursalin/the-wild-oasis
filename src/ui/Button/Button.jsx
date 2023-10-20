import styles from "./Button.module.css";

function Button({
  variation = "primary",
  size = "medium",
  disabled = false,
  onClick,
  children,
  type = "button",
}) {
  return (
    <button
      className={`${styles.button} ${styles[variation]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children || "click me"}
    </button>
  );
}
export default Button;
