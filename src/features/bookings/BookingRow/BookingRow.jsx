import styles from "./BookingRow.module.css";
import { format } from "date-fns";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

import { useNavigate } from "react-router-dom";
import Table from "../../../ui/Table/Table";
import Modal from "../../../ui/Modal/Modal";
import Menus from "../../../ui/Menus/Menus";
import ConfirmDelete from "../../../ui/ConfirmDelete/ConfirmDelete";
import { formatCurrency } from "../../../utils/helpers";
import Tag from "../../../ui/Tag/Tag";
import { useCheckout } from "../../check-in-out/hooks/useCheckOut";
import { useDeleteBooking } from "../hooks/useDeleteBooking";

function BookingRow({
  booking: {
    id: bookingId,
    startDate,
    endDate,
    totalPrice,
    status,
    guests: { fullName: guestName, email },
    cabins: { name: cabinName },
  },
}) {
  const navigate = useNavigate();
  const { checkOut, isCheckingOut } = useCheckout();
  const { deleteBooking, isDeleting } = useDeleteBooking();

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <Table.Row>
      {/* Cabin Name */}
      <div className={styles.cabin}>{cabinName}</div>

      {/* Guest Info. */}
      <div className={styles.guestInfo}>
        <span>{guestName}</span>
        <span>{email}</span>
      </div>

      {/* Dates */}
      <div className={styles.date}>
        <span>
          {format(new Date(startDate), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(endDate), "MMM dd yyyy")}
        </span>
      </div>

      {/* Status */}
      <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>

      {/* Amount */}
      <div className={styles.amount}>{formatCurrency(totalPrice)}</div>

      {/* Actions */}
      <Modal>
        <Menus.Menu>
          <Menus.Toggle id={bookingId} />
          <Menus.List id={bookingId}>
            <Menus.Button
              icon={<HiEye />}
              onClick={() => navigate(`/bookings/${bookingId}`)}
            >
              See details
            </Menus.Button>

            {status === "unconfirmed" && (
              <Menus.Button
                icon={<HiArrowDownOnSquare />}
                onClick={() => navigate(`/checkin/${bookingId}`)}
              >
                Check in
              </Menus.Button>
            )}

            {status === "checked-in" && (
              <Menus.Button
                onClick={() => checkOut(bookingId)}
                icon={<HiArrowUpOnSquare />}
                disabled={isCheckingOut}
              >
                Check out
              </Menus.Button>
            )}

            <Modal.Open opens="delete">
              <Menus.Button icon={<HiTrash />}>Delete booking</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus.Menu>

        <Modal.Window name="delete">
          <ConfirmDelete
            onConfirm={() => deleteBooking(bookingId)}
            resourceName="booking"
            disabled={isDeleting}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default BookingRow;
