import UpdatePasswordForm from "../../features/authentication/UpdatePasswordForm/UpdatePasswordForm";
import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm/UpdateUserDataForm";
import Heading from "../../ui/Heading/Heading";
import Row from "../../ui/Row/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>
      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>
      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
