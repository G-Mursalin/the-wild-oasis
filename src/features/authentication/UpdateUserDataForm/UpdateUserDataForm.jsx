import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { useUpdateUser } from "../hooks/useUpdateUser";
import FormRow from "../../../ui/FormRow/FormRow";
import Button from "../../../ui/Button/Button";

function UpdateUserDataForm() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();
  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  //   Handle form submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  //   Reset the Form
  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow>
        <Button
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isUpdating}>
          Update account
        </Button>
      </FormRow>
    </form>
  );
}

export default UpdateUserDataForm;
