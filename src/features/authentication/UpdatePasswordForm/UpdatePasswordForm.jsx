import { useForm } from "react-hook-form";
import { useUpdateUser } from "../hooks/useUpdateUser";
import FormRow from "../../../ui/FormRow/FormRow";
import Button from "../../../ui/Button/Button";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset() });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="New password (min 8 chars)"
        error={errors?.password?.message}
      >
        <input
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <input
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </FormRow>
      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button type="submit" disabled={isUpdating}>
          Update password
        </Button>
      </FormRow>
    </form>
  );
}

export default UpdatePasswordForm;
