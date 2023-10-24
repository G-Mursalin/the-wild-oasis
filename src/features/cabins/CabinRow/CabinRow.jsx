import { HiPencil, HiTrash } from "react-icons/hi2";
import styles from "./CabinRow.module.css";
import { formatCurrency } from "../../../utils/helpers";
import { useDeleteCabin } from "../hooks/useDeleteCabin";
import CreateCabinForm from "../CreateCabinForm/CreateCabinForm";
import Modal from "../../../ui/Modal/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete/ConfirmDelete";

function CabinRow({ cabin }) {
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
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
          <Modal>
            {/* Edit Cabin */}
            <Modal.Open opens="edit">
              <button>
                <HiPencil />
              </button>
            </Modal.Open>
            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            {/* Delete Cabin */}
            <Modal.Open opens="delete">
              <button>
                <HiTrash />
              </button>
            </Modal.Open>
            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Modal>
        </div>
      </td>
    </tr>
  );
}

export default CabinRow;
