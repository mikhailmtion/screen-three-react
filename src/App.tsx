import "./App.scss";
import ControlsView from "./Components/ControlsView/ControlsView";
import SideBar from "./Components/SideBar/SideBar";
import RingScene from "./Scenes/RingScene";

function App() {
  return (
    <>
    <SideBar/>
    <ControlsView/>
    <RingScene/>
    </>
  );
}

export default App;
