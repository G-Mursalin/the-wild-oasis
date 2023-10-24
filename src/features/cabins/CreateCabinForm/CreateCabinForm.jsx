import { useForm } from "react-hook-form";
import Button from "../../../ui/Button/Button";
import FormRow from "../../../ui/FormRow/FormRow";
import { useCreateCabin } from "../hooks/useCreateCabin";
import { useEditCabin } from "../hooks/useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const isMutating = isCreating || isEditing;

  // Get Form Errors
  const { errors } = formState;

  // Handle Form Submit
  const onSubmitForm = (data) => {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (!isEditSession) {
      createCabin(
        { ...data, image: image },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    } else {
      editCabin(
        { ...data, image: image, id: editId },
        {
          onSuccess: () => {
            onCloseModal?.();
          },
        }
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} style={{ width: "90rem" }}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <input
          type="text"
          id="name"
          disabled={isMutating}
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <input
          type="number"
          id="maxCapacity"
          disabled={isMutating}
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
          disabled={isMutating}
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
          disabled={isMutating}
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
          disabled={isMutating}
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <input
          type="file"
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          onClick={() => onCloseModal?.()}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isCreating || isEditing} type="submit">
          {isEditSession ? "Edit cabin" : "Create New Cabin"}
        </Button>
      </FormRow>
    </form>
  );
}

export default CreateCabinForm;
