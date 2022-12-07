import { makeAutoObservable } from 'mobx';
import { themeType } from '../types/theme';

class MainStore {
  isFullScreen = false;
  isStopModel = false;
  isReturnModel = false;
  isShowSettings = false;
  theme: themeType = 'white';

  constructor() {
    makeAutoObservable(this);
  }

  setFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    this.isFullScreen = !this.isFullScreen;
  };

  setStopModel = () => {
    this.isStopModel = !this.isStopModel;
  };

  setShowingSettings = () => {
    this.isShowSettings = !this.isShowSettings;
  };

  setTheme = (theme: themeType) => {
    this.theme = theme;
  };
}

const mainStore = new MainStore();
export { mainStore };
