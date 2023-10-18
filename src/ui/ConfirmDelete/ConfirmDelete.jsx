import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import styles from "./ConfirmDelete.module.css";

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className={styles.confirmDelete}>
      <Heading as="h3">Delete {resourceName || "data"}</Heading>
      <p>
        Are you sure you want to delete this {resourceName || "data"}
        &nbsp; permanently? This action cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
