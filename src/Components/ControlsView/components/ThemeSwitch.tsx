import Theme from "./Theme";
import styles from "./ThemeSwitch.module.scss";
import { mainStore } from "../../../store/MainStore";
import { observer } from "mobx-react-lite";

function ThemeSwitch() {
  const handleClickTheme = (theme: string) => {
    mainStore.setTheme(theme);
  };
  return (
    <div className={styles.switch}>
      <Theme color="white" handleClickTheme={handleClickTheme} />
      <Theme color="brown" handleClickTheme={handleClickTheme} />
      <Theme color="dark" handleClickTheme={handleClickTheme} />
    </div>
  );
}

export default observer(ThemeSwitch);
