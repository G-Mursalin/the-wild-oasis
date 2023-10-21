import { HiPencil, HiTrash } from "react-icons/hi2";
import styles from "./CabinRow.module.css";
import { useState } from "react";
import { formatCurrency } from "../../../utils/helpers";
import { useDeleteCabin } from "../hooks/useDeleteCabin";
import CreateCabinForm from "../CreateCabinForm/CreateCabinForm";

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();
  const [showEditForm, setShowEditForm] = useState(false);

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = cabin;

  return (
    <>
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
          <div className={styles.cabinPrice}>
            {formatCurrency(regularPrice)}
          </div>
        </td>
        {/* Discount */}
        <td>
          {discount ? (
            <div className={styles.cabinDiscount}>
              {formatCurrency(discount)}
            </div>
          ) : (
            <span>&mdash;</span>
          )}
        </td>
        {/* Actions */}
        <td>
          <div>
            <button onClick={() => setShowEditForm((sef) => !sef)}>
              <HiPencil />
            </button>
            <button disabled={isDeleting} onClick={() => deleteCabin(cabinId)}>
              <HiTrash />
            </button>
          </div>
        </td>
      </tr>
      {showEditForm && (
        <div>
          <CreateCabinForm cabinToEdit={cabin} />
        </div>
      )}
    </>
  );
}

export default CabinRow;
