import styles from './SideBar.module.css';
import Logo from '../Logo/Logo';
import MainNav from '../MainNav/MainNav';
import Uploader from '../../data/Uploader';

function Sidebar() {
  return (
    <aside className={styles.sidebarContainer}>
      <Logo />
      <MainNav />
      <Uploader />
    </aside>
  );
}

export default Sidebar;
