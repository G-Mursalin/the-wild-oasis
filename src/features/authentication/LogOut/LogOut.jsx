import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogOut } from "../hooks/useLogOut";
import SpinnerMini from "../../../ui/Spinner/SpinnerMini/SpinnerMini";
import ButtonIcon from "../../../ui/ButtonIcon/ButtonIcon";

function LogOut() {
  const { logout, isLoading } = useLogOut();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default LogOut;
