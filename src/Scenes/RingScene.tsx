import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Ring from "../Models/Ring";

function RingScene() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 200], fov: 8 }}>
      <OrbitControls maxDistance={250} minDistance={80} />
      <Ring />
    </Canvas>
  );
}

export default RingScene;
