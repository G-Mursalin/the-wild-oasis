import styles from "./PageNotFound.module.css";
import { useMoveBack } from "../../hooks/useMoveBack";
import Heading from "../../ui/Heading/Heading";
import Button from "../../ui/Button/Button";

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className={styles.pageNotFound}>
      <div className={styles.box}>
        <Heading as="h1">
          The page you are looking for could not be found 😢
        </Heading>
        <Button onClick={moveBack} size="large">
          &larr; Go back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
