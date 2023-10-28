import LoginForm from "../../features/authentication/LoginForm/LoginForm";
import Heading from "../../ui/Heading/Heading";
import Logo from "../../ui/Logo/Logo";
import styles from "./Login.module.css";

function Login() {
  return (
    <main className={styles.loginLayout}>
      <Logo />
      <Heading as="h4">Log in your account</Heading>
      <LoginForm />
    </main>
  );
}

export default Login;
