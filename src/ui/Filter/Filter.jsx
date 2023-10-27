import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField) || options[0].value;

  const handleClick = (value) => {
    searchParams.set(filterField, value);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <button
          key={option.value}
          disabled={option.value === currentFilter}
          className={`${styles.filterButton} ${
            option.value === currentFilter ? styles.active : ""
          }`}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default Filter;
