"use client";

import { Canvas, useThree } from "@react-three/fiber";
import Model from "./model";
import { Suspense } from "react";
import { useProgress, Html } from "@react-three/drei";
import { BackgroundLines } from "./background-lines";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

export default function Scene() {
  return (
      <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="h-full w-full">
        <directionalLight position={[-5, -5, 5]} intensity={6} />
        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
  );
}
