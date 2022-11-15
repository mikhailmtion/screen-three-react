import { makeAutoObservable } from "mobx";

class PlayerStore {
  isPlay = false;
  isReady = false;

  constructor() {
    makeAutoObservable(this);
  }

  setReady = (value: boolean) => {
    this.isReady = value;
  };

  setPlay = () => {
    this.isPlay = !this.isPlay;
  };
}

const playerStore = new PlayerStore();
export { playerStore };
