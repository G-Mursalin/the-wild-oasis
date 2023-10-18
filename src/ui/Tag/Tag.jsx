import styles from "./Tag.module.css";

function Tag({ type, children }) {
  return (
    <span
      style={{
        color: `var(--color-${type || "grey"}-700)`,
        backgroundColor: `var(--color-${type || "grey"}-100)`,
      }}
      className={`${styles.tag}`}
    >
      {children}
    </span>
  );
}

export default Tag;
