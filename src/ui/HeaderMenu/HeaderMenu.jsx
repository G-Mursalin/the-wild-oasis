import LogOut from "../../features/authentication/LogOut/LogOut";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./HeaderMenu.module.css";
import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <LogOut />
      </li>
    </ul>
  );
}

export default HeaderMenu;
