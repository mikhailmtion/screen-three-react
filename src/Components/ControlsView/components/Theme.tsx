import styles from "./Theme.module.scss";
import { mainStore } from "../../../store/MainStore";
import { observer } from "mobx-react-lite";
import { themeType } from "../../../types/theme";

type ThemeProps = {
  color: themeType;
  handleClickTheme: (color: themeType) => void;
};

function Theme({ color, handleClickTheme }: ThemeProps) {
  const isActive = mainStore.theme === color;
  return (
    <div
      className={`${styles.theme} ${styles[color]}  ${isActive ? `${styles.active}` : ""}`}
      onClick={() => handleClickTheme(color)}
    ></div>
  );
}

export default observer(Theme);
