import styles from "./TodayItem.module.css";
import { Link } from "react-router-dom";

import Tag from "../../../../ui/Tag/Tag";
import Flag from "../../../../ui/Flag/Flag";
import Button from "../../../../ui/Button/Button";
import CheckoutButton from "../../CheckoutButton/CheckoutButton";

function TodayItem({ activity }) {
  const { id, status, guests, numNights } = activity;

  return (
    <li className={styles.item}>
      {status === "unconfirmed" && <Tag type="green">Arriving</Tag>}
      {status === "checked-in" && <Tag type="blue">Departing</Tag>}

      <Flag src={guests.countryFlag} alt={`Flag of ${guests.country}`} />
      <div className={styles.guest}>{guests.fullName}</div>
      <div>{numNights} nights</div>

      {status === "unconfirmed" && (
        <Button
          size="small"
          variation="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          Check in
        </Button>
      )}
      {status === "checked-in" && <CheckoutButton bookingId={id} />}
    </li>
  );
}

export default TodayItem;
