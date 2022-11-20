import styles from "./Theme.module.scss";
import { mainStore } from "../../../store/MainStore";
import { observer } from "mobx-react-lite";

type ThemeProps = {
  color: string;
  handleClickTheme: (color: string) => void;
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
