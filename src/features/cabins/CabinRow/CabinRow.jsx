import { HiPencil, HiTrash } from "react-icons/hi2";
import styles from "./CabinRow.module.css";
import { formatCurrency } from "../../../utils/helpers";
import { useDeleteCabin } from "../hooks/useDeleteCabin";
import CreateCabinForm from "../CreateCabinForm/CreateCabinForm";
import Modal from "../../../ui/Modal/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete/ConfirmDelete";
import Table from "../../../ui/Table/Table";
import Menus from "../../../ui/Menus/Menus";

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
    <Table.Row>
      {/* Img */}
      <img className={styles.cabinImg} src={image} />

      {/* Name */}
      <div className={styles.cabinName}>{name}</div>

      {/* Capacity */}
      <div>Fits up to {maxCapacity} guests</div>

      {/* Price */}
      <div className={styles.cabinPrice}>{formatCurrency(regularPrice)}</div>

      {/* Discount */}
      {discount ? (
        <div className={styles.cabinDiscount}>{formatCurrency(discount)}</div>
      ) : (
        <span>&mdash;</span>
      )}

      {/* Actions */}
      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={cabinId} />

            <Menus.List id={cabinId}>
              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateCabinForm cabinToEdit={cabin} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="cabins"
                disabled={isDeleting}
                onConfirm={() => deleteCabin(cabinId)}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default CabinRow;
