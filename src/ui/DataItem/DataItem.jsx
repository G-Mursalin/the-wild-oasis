import styles from "./DataItem.module.css";

function DataItem({ icon, label, children }) {
  return (
    <div className={styles.dataItem}>
      <span>
        {icon}
        <span>{label}</span>
      </span>
      {children}
    </div>
  );
}

export default DataItem;
