import styles from "./Settings.module.scss";
import ThemeSwitch from "./ThemeSwitch";

function Settings() {
  return (
    <div className={styles.settings}>
      <ThemeSwitch />
    </div>
  );
}

export default Settings;
