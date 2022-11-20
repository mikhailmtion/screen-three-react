import { makeAutoObservable } from "mobx";
class MainStore {
  isFullScreen = false;
  isStopModel = false;
  isReturnModel = false;
  isShowSettings = false;
  theme = "white";

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
  
  setTheme = (theme: string) => {
    this.theme = theme;
  };
}

const mainStore = new MainStore();
export { mainStore };
