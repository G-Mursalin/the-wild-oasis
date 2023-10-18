import styles from "./Heading.module.css";

function Heading({ as = "h1", children }) {
  return <h1 className={styles[as]}>{children}</h1>;
}

export default Heading;
