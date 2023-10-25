import BookingsTable from "../../features/bookings/BookingTable/BookingsTable";
import Heading from "../../ui/Heading/Heading";
import Row from "../../ui/Row/Row";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>
        <p>filter / sort</p>
      </Row>
      <Row>
        <BookingsTable />
      </Row>
    </>
  );
}

export default Bookings;
