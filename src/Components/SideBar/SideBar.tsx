import Player from "../Player/Player";
import TimeSection from "../TimeSection/TimeSection";
import styles from "./SideBar.module.scss";

function SideBar() {
  return (
    <div className={styles.side}>
      <TimeSection />
      <Player/>
    </div>
  );
}

export default SideBar;
