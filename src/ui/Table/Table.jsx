import styles from "./Table.module.css";
import { createContext, useContext } from "react";

// Create Context
const TableContext = createContext();

// Parent Component
function Table({ columns, children }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role="table" className={styles.table}>
        {children}
      </div>
    </TableContext.Provider>
  );
}

// Child Components
function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={styles.header}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

function Body({ data, render }) {
  if (!data.length)
    return <p className={styles.empty}>No data to show at the moment</p>;

  return <section className={styles.body}>{data.map(render)}</section>;
}

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <div
      role="row"
      className={styles.row}
      style={{ gridTemplateColumns: columns }}
    >
      {children}
    </div>
  );
}

// Add child components as properties to parent component
Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
