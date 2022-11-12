/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: stevencmutter (https://sketchfab.com/stevencmutter)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/big-tree-point-cloud-3c31d0db9cf74b4bb8ebbb5f3f32a378
title: Big Tree Point Cloud
*/

// import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

// type GLTFResult = GLTF & {
//   nodes: {};
//   materials: {
//     ["Scene_-_Root"]: THREE.PointsMaterial;
//   };
// };

export function Tree(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("models/tree.glb") as any;
  return (
    <group {...props} dispose={null}>
      <group rotation={[0.01, 0, 0.03]} scale={5.88}>
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/tree.glb");