/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Model } from "./model";

export default function Alfred() {
  return (
  
    <Canvas
      camera={{ position: [2, 0, 12.25], fov: 15 }}
      style={{
        width: "220px",
        height: "150px",
      }}
    >
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <Suspense fallback={null}>
        <Model position={[0.025, -0.9, 0]} />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
