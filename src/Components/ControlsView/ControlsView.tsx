import { observer } from 'mobx-react-lite';
import styles from "./ControlsView.module.scss";
import { ReactComponent as Stop } from "../../assets/icons/stop.svg";
import { ReactComponent as Expand } from "../../assets/icons/expand.svg";
import { ReactComponent as Minimize } from "../../assets/icons/minimize.svg";
import { mainStore } from "../../store/MainStore";

function ControlsView() {
  const toggleFullScreen = () => {
    mainStore.setFullScreen();
  };

  const handleStopModel = () => {
    mainStore.setStopModel();
  };

  return (
    <div className={styles.controls}>
      {!mainStore.isFullScreen && (
        <>
          <Stop onClick={handleStopModel} />
          <Expand onClick={toggleFullScreen} />
        </>
      )}
      {mainStore.isFullScreen && <Minimize  onClick={toggleFullScreen}/>}
    </div>
  );
}

export default observer(ControlsView);
