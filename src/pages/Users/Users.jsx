import SignUpForm from "../../features/authentication/SignUpForm/SignUpForm";
import Heading from "../../ui/Heading/Heading";

function Users() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignUpForm />
    </>
  );
}

export default Users;
