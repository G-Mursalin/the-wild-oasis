import styles from "./FullPage.module.css";

function FullPage({ children }) {
  return <div className={styles.fillPage}>{children} </div>;
}

export default FullPage;
