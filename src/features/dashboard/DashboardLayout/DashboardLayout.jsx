import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
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

  if (isLoadingRecentBookings || isLoadingRecentStays) return <SpinnerLarge />;

  console.log(bookings);
  console.log("ggg", confirmedStays);

  return (
    <div className={styles.dashboardLayout}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
}

export default DashboardLayout;
