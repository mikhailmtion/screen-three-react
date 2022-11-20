import Player from "../Player/Player";
import TimeSection from "../TimeSection/TimeSection";
import styles from "./LeftSideBar.module.scss";

function LeftSideBar() {
  return (
    <div className={styles.left}>
      <TimeSection />
      <Player/>
    </div>
  );
}

export default LeftSideBar;
