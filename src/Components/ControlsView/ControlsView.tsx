import styles from "./ControlsView.module.scss";
import { ReactComponent as Stop } from "../../assets/icons/stop.svg";
import { ReactComponent as Expand } from "../../assets/icons/expand.svg";
import { mainStore } from "../../store/MainStore";


function ControlsView() {

  const toggleFullSceen = () => {
    mainStore.setFullScreen();
  };

  const handleStopModel = () => {
    mainStore.setStopModel()
  }

  return (
    <div className={styles.controls}>
      <Stop onClick={handleStopModel}/>
      <Expand onClick={toggleFullSceen} />
    </div>
  );
}

export default ControlsView;
