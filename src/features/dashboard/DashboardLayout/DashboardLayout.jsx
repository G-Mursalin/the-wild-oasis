import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
import { useCabins } from "../../cabins/hooks/useCabins";
import DurationChart from "../DurationChart/DurationChart";
import SalesChart from "../SalesChart/SalesChart";
import Stats from "../Stats/Stats";
import { useRecentBookings } from "../hooks/useRecentBookings";
import { useRecentStays } from "../hooks/useRecentStays";
import styles from "./DashboardLayout.module.css";

function DashboardLayout() {
  const { bookings, isLoading: isLoadingRecentBookings } = useRecentBookings();
  const {
    confirmedStays,
    isLoading: isLoadingRecentStays,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoadingCabins } = useCabins();

  if (isLoadingRecentBookings || isLoadingRecentStays || isLoadingCabins)
    return <SpinnerLarge />;

  return (
    <div className={styles.dashboardLayout}>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins.length}
      />
      <div>2</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </div>
  );
}

export default DashboardLayout;
