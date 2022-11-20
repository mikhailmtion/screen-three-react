import { observer } from "mobx-react-lite";
import styles from "./ControlsView.module.scss";
import { ReactComponent as Stop } from "../../assets/icons/stop.svg";
import { ReactComponent as StopActive } from "../../assets/icons/stopActive.svg";
import { ReactComponent as Expand } from "../../assets/icons/expand.svg";
import { ReactComponent as Minimize } from "../../assets/icons/minimize.svg";
import { ReactComponent as SettingsMenu } from "../../assets/icons/settings.svg";
import { mainStore } from "../../store/MainStore";

function ControlsView() {
  const toggleFullScreen = () => {
    if (mainStore.isShowSettings) {
      mainStore.setShowingSettings();
    }
    mainStore.setFullScreen();
  };

  const handleStopModel = () => {
    mainStore.setStopModel();
  };
  const handleShowSettings = () => {
    mainStore.setShowingSettings();
  };

  return (
    <div className={styles.controls}>
      {!mainStore.isFullScreen && (
        <>
          {!mainStore.isStopModel ? (
            <Stop onClick={handleStopModel} />
          ) : (
            <StopActive onClick={handleStopModel} />
          )}
          <Expand onClick={toggleFullScreen} />
          <SettingsMenu onClick={handleShowSettings} />
        </>
      )}
      {mainStore.isFullScreen && <Minimize onClick={toggleFullScreen} />}
    </div>
  );
}

export default observer(ControlsView);
