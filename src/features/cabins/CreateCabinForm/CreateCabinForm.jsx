import { useForm } from "react-hook-form";
import Button from "../../../ui/Button/Button";
import FormRow from "../../../ui/FormRow/FormRow";
import { useCreateCabin } from "../hooks/useCreateCabin";

function CreateCabinForm() {
  const { isCreating, createCabin } = useCreateCabin();
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  // Get Form Errors
  const { errors } = formState;

  // Handle Form Submit
  const onSubmitForm = (data) => {
    createCabin(
      { ...data, image: data.image[0] },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          type="text"
          id="name"
          disabled={isCreating}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          type="number"
          id="maxCapacity"
          disabled={isCreating}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should me at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <input
          type="number"
          id="regularPrice"
          disabled={isCreating}
          min={0}
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 0, message: "Minimum price 0" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <input
          type="number"
          id="discount"
          defaultValue={0}
          min={0}
          disabled={isCreating}
          {...register("discount", {
            required: "This field is required",
            min: { value: 0, message: "Price should me at least 1" },
            validate: (value) =>
              +value <= +getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.description?.message}>
        <textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isCreating}
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo">
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating} type="submit">
          Add cabin
        </Button>
      </FormRow>
    </form>
  );
}

export default CreateCabinForm;
