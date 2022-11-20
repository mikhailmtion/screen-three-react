import { observer } from "mobx-react-lite";
import Settings from "../ControlsView/components/Settings";
import ControlsView from "../ControlsView/ControlsView";
import styles from "./RightSideBar.module.scss";
import { mainStore } from "../../store/MainStore";

function RightSideBar() {
  return (
    <div className={styles.right}>
      <ControlsView />
      {mainStore.isShowSettings && <Settings />}
    </div>
  );
}

export default observer(RightSideBar);
