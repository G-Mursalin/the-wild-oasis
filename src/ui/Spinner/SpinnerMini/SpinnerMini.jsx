import styles from "./SpinnerMini.module.css";
import { BiLoaderAlt } from "react-icons/bi";

function SpinnerMini() {
  return <BiLoaderAlt className={styles.spinner} />;
}

export default SpinnerMini;
