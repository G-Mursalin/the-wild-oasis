import styles from "./TableOperations.module.css";

function TableOperations({ children }) {
  return <div className={styles.operations}>{children}</div>;
}

export default TableOperations;
