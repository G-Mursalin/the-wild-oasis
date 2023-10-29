import UserAvatar from "../../features/authentication/UserAvatar/UserAvatar";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <UserAvatar />
      <HeaderMenu />
    </header>
  );
}

export default Header;
