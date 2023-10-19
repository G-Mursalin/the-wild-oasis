import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
import CabinRow from "../CabinRow/CabinRow";
import { useCabins } from "../hooks/useCabins";
import styles from "./CabinTable.module.css";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <SpinnerLarge />;

  return (
    <table className={styles.table}>
      <thead className={styles.tableHeader}>
        <tr>
          <td>
            <div></div>
          </td>
          <td>
            <div>Cabin</div>
          </td>
          <td>
            <div>Capacity</div>
          </td>
          <td>
            <div>Price</div>
          </td>
          <td>
            <div>Discount</div>
          </td>
          <td>
            <div></div>
          </td>
        </tr>
      </thead>
      <tbody>
        {cabins.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </tbody>
    </table>
  );
}

export default CabinTable;
