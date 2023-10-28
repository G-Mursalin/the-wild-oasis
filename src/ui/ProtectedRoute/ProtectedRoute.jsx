import { useEffect } from "react";
import { useUser } from "../../features/authentication/hooks/useUser";
import FullPage from "../FullPage/FullPage";
import SpinnerLarge from "../Spinner/SpinnerLarge/SpinnerLarge";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //  1. Load the auth. user
  const { isLoading, isAuthenticated } = useUser();

  //   2. If there is no auth. user redirect to Login Page
  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, isLoading, navigate]);

  //   3. While loading show a spinner
  if (isLoading)
    return (
      <FullPage>
        <SpinnerLarge />
      </FullPage>
    );

  //   4. It there is auth. user render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
