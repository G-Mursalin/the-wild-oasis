import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../SideBar/SideBar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <Sidebar />
      <main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
