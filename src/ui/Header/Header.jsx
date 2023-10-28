import LogOut from "../../features/authentication/LogOut/LogOut";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <LogOut />
    </header>
  );
}

export default Header;
