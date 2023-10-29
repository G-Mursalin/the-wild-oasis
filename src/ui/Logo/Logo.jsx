import { useDarkMode } from "../../context/DarkModeContext";
import styles from "./Logo.module.css";

function Logo() {
  const { isDarkMode } = useDarkMode();

  const src = isDarkMode ? "/logo-dark.png" : "/logo-light.png";

  return (
    <div className={styles.logo}>
      <img src={src} alt="Logo" />
    </div>
  );
}

export default Logo;
