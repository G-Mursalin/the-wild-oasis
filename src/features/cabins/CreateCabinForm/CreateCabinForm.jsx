import Button from "../../../ui/Button/Button";
import FormRow from "../../../ui/FormRow/FormRow";

function CreateCabinForm() {
  return (
    <form>
      <FormRow>
        <label htmlFor="name">Cabin name</label>
        <input type="text" id="name" />
      </FormRow>

      <FormRow>
        <label htmlFor="maxCapacity">Maximum capacity</label>
        <input type="number" id="maxCapacity" />
      </FormRow>

      <FormRow>
        <label htmlFor="regularPrice">Regular price</label>
        <input type="number" id="regularPrice" />
      </FormRow>

      <FormRow>
        <label htmlFor="discount">Discount</label>
        <input type="number" id="discount" defaultValue={0} />
      </FormRow>

      <FormRow>
        <label htmlFor="description">Description for website</label>
        <textarea type="number" id="description" defaultValue="" />
      </FormRow>

      <FormRow>
        <label htmlFor="image">Cabin photo</label>
        <input type="file" id="image" accept="image/*" />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Edit cabin</Button>
      </FormRow>
    </form>
  );
}

export default CreateCabinForm;
