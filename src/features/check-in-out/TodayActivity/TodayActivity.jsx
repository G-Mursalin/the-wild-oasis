import Heading from "../../../ui/Heading/Heading";
import Row from "../../../ui/Row/Row";
import SpinnerLarge from "../../../ui/Spinner/SpinnerLarge/SpinnerLarge";
import { useTodayActivity } from "../hooks/useTodayActivity";
import styles from "./TodayActivity.module.css";
import TodayItem from "./TodayItem/TodayItem";

function TodayActivity() {
  const { activities, isLoading } = useTodayActivity();

  return (
    <div className={styles.today}>
      <Row type="horizontal">
        <Heading as="h2">Today</Heading>
      </Row>

      {!isLoading ? (
        activities?.length > 0 ? (
          <ul className={styles.list}>
            {activities.map((activity) => (
              <TodayItem activity={activity} key={activity.id} />
            ))}
          </ul>
        ) : (
          <p className={styles.noActivity}>No activity today...</p>
        )
      ) : (
        <SpinnerLarge />
      )}
    </div>
  );
}

export default TodayActivity;
