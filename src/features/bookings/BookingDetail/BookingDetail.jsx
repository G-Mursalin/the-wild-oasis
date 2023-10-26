import styles from "./BookingDetail.module.css";
import { HiArrowUpOnSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

import { useMoveBack } from "../../../hooks/useMoveBack";
import { useBooking } from "../hooks/useBooking";
import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
import Row from "../../../ui/Row/Row";
import Heading from "../../../ui/Heading/Heading";
import Tag from "../../../ui/Tag/Tag";
import Modal from "../../../ui/Modal/Modal";
import Button from "../../../ui/Button/Button";
import ConfirmDelete from "../../../ui/ConfirmDelete/ConfirmDelete";
import ButtonText from "../../../ui/ButtonText/ButtonText";
import ButtonGroup from "../../../ui/ButtonGroup/ButtonGroup";
import BookingDataBox from "../BookingDataBox/BookingDataBox";

function BookingDetail() {
  const { booking, isLoading } = useBooking();

  const moveBack = useMoveBack();
  const navigate = useNavigate();

  if (isLoading) return <SpinnerLarge />;

  const { status, id: bookingId } = booking;

  const statusToTagName = {
    unconfirmed: "blue",
    "checked-in": "green",
    "checked-out": "silver",
  };

  return (
    <>
      <Row type="horizontal">
        <div className={styles.headingGroup}>
          <Heading as="h1">Booking #{bookingId}</Heading>
          <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag>
        </div>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox booking={booking} />

      <ButtonGroup>
        {status === "unconfirmed" && (
          <Button onClick={() => navigate(`/checkin/${bookingId}`)}>
            Check in
          </Button>
        )}

        {status === "checked-in" && (
          <Button icon={<HiArrowUpOnSquare />}>Check out</Button>
        )}

        <Modal>
          <Modal.Open opens="delete">
            <Button variation="danger">Delete booking</Button>
          </Modal.Open>

          <Modal.Window name="delete">
            <ConfirmDelete resourceName="booking" />
          </Modal.Window>
        </Modal>

        <Button variation="secondary" onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
