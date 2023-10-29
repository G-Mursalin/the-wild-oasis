import { useState } from "react";
import Button from "../../../ui/Button/Button";
import FormRowVertical from "../../../ui/FormRowVertical/FormRowVertical";
import { useLogin } from "../hooks/useLogin";
import SpinnerMini from "../../../ui/Spinner/SpinnerMini/SpinnerMini";

function LoginForm() {
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("123456789");
  const { login, isLoading } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button type="submit" size="large">
          {isLoading ? <SpinnerMini /> : "Login"}
        </Button>
      </FormRowVertical>
    </form>
  );
}

export default LoginForm;
