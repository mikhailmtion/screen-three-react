import React from 'react';
import { Canvas } from "@react-three/fiber";
import { Sky, Environment, PerspectiveCamera, OrthographicCamera, OrbitControls, Stats,Bounds } from '@react-three/drei'
import './App.scss';
import { Tree } from './Models/Tree';

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 12]}}>
        <OrbitControls />
      <Tree/>
    </Canvas>
  );
}

export default App;
