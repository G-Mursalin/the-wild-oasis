import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
import styles from "./CabinRow.module.css";
import { formatCurrency } from "../../../utils/helpers";
import { useDeleteCabin } from "../hooks/useDeleteCabin";

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = cabin;

  return (
    <tr className={styles.row}>
      {/* Img */}
      <td>
        <img className={styles.cabinImg} src={image} />
      </td>
      {/* Name */}
      <td>
        <div className={styles.cabinName}>{name}</div>
      </td>
      {/* Capacity */}
      <td>
        <div>Fits up to {maxCapacity} guests</div>
      </td>
      {/* Price */}
      <td>
        <div className={styles.cabinPrice}>{formatCurrency(regularPrice)}</div>
      </td>
      {/* Discount */}
      <td>
        {discount ? (
          <div className={styles.cabinDiscount}>{formatCurrency(discount)}</div>
        ) : (
          <span>&mdash;</span>
        )}
      </td>
      {/* Actions */}
      <td>
        <div>
          <button>
            <HiSquare2Stack />
          </button>
          <button>
            <HiPencil />
          </button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            <HiTrash />
          </button>
        </div>
      </td>
    </tr>
  );
}

export default CabinRow;
