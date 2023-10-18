import styles from "./Row.module.css";

function Row({ type = "vertical", children }) {
  return <div className={`${styles.row} ${styles[type]}`}>{children}</div>;
}

export default Row;
