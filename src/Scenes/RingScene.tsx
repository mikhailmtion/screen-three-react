import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Lightformer } from "@react-three/drei";
import Ring from "../Models/Ring";

function RingScene() {
  return (
    <Suspense fallback={null}>
      <Canvas shadows camera={{ position: [0, 0, 200], fov: 8 }}>
        <OrbitControls maxDistance={250} minDistance={80} />
        <Ring />
      </Canvas>
    </Suspense>
  );
}

export default RingScene;
