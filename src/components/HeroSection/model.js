import { useRef, useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    actions["Experiment"].play();
    actions["Experiment"].paused = false;
  }, [actions]);

  useFrame(() => {
    // Automatically loop the animation
    if (
      actions["Experiment"].time >= actions["Experiment"].getClip().duration
    ) {
      actions["Experiment"].time = 0; // Reset the time to loop the animation
    }
  });

  return (
    <group ref={group} scale={[1.5, 1.5, 1.5]} >
      <primitive object={scene} />
    </group>
  );
}
