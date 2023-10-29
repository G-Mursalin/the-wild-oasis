import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

function DarkModeToggle() {
  return <ButtonIcon>{true ? <HiOutlineSun /> : <HiOutlineMoon />}</ButtonIcon>;
}

export default DarkModeToggle;
