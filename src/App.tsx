import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { mainStore } from "./store/MainStore";
import "./App.scss";
import LeftSideBar from "./Components/LeftSideBar/LeftSideBar";
import RightSideBar from "./Components/RightSideBar/RightSideBar";
import RingScene from "./Scenes/RingScene";

function App() {
  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove(body.classList[0]);
    body.classList.add(mainStore.theme);
  }, [mainStore.theme]);

  return (
    <>
      <LeftSideBar />
      <RightSideBar />
      <RingScene />
    </>
  );
}

export default observer(App);
