import { useSearchParams } from "react-router-dom";
import Menus from "../../../ui/Menus/Menus";
import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
import Table from "../../../ui/Table/Table";
import CabinRow from "../CabinRow/CabinRow";
import { useCabins } from "../hooks/useCabins";
import Empty from "../../../ui/Empty/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  // Loading Spinner
  if (isLoading) return <SpinnerLarge />;

  if (!cabins.length) return <Empty resourceName="cabins" />;

  // Filter
  const filterValue = searchParams.get("discount") || "all";

  let filteredCabins;

  if (filterValue === "all") filteredCabins = cabins;
  if (filterValue === "no-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === "with-discount")
    filteredCabins = cabins.filter((cabin) => cabin.discount > 0);

  // Sort
  const sortByValue = searchParams.get("sortBy") || "created_at-asc";
  const [field, direction] = sortByValue.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  const sortedCabins = filteredCabins.sort((a, b) =>
    field === "created_at"
      ? (new Date(a[field]) - new Date(b[field])) * modifier
      : (a[field] - b[field]) * modifier
  );

  return (
    <Menus>
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
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
        <Table.Footer>
          <p>Footer</p>
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default CabinTable;
