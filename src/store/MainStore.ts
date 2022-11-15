import { makeAutoObservable } from "mobx";

class MainStore {
  isFullScreen = false;
  isStopModel = false;
  isReturnModel = false;

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
}

const mainStore = new MainStore();
export { mainStore };
