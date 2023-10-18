import styles from "./Select.module.css";

function Select({ options, value, onChange, ...props }) {
  return (
    <select
      className={`${styles.select} ${(props) =>
        props.type === "white"
          ? "1px solid var(--color-grey-100)"
          : "1px solid var(--color-grey-300)"}`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
