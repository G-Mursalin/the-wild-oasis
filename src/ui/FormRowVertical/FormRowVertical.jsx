import styles from "./FormRowVertical.module.css";

function FormRowVertical({ label, error, children }) {
  return (
    <div className={styles.row}>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}

export default FormRowVertical;
