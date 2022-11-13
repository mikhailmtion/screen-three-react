import React, { useState, useRef, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import "./App.scss";
import { Tree } from "./Models/Tree";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 200], fov: 8 }}>
      <Tree />
      <OrbitControls maxDistance={250} minDistance={80} />
    </Canvas>
  );
}

export default App;
