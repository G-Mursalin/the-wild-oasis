import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
import Table from "../../../ui/Table/Table";
import CabinRow from "../CabinRow/CabinRow";
import { useCabins } from "../hooks/useCabins";

function CabinTable() {
  const { isLoading, cabins } = useCabins();

  if (isLoading) return <SpinnerLarge />;

  return (
    <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
      <Table.Header>
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={cabins}
        render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
      />
    </Table>
  );
}

export default CabinTable;
