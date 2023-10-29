import DashboardFilter from "../../features/dashboard/DashboardFilter/DashboardFilter";
import DashboardLayout from "../../features/dashboard/DashboardLayout/DashboardLayout";
import Heading from "../../ui/Heading/Heading";
import Row from "../../ui/Row/Row";

function Dashboard() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
