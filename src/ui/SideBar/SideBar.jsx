import styles from "./SideBar.module.css";
import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <Logo />
      <MainNav />
    </aside>
  );
}

export default Sidebar;
