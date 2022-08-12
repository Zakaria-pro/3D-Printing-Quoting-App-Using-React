import { createRoot } from "react-dom/client";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Html, useProgress } from "@react-three/drei";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import { OrbitControls } from "@react-three/drei";

// import bunny from "../../assets/bunny.obj";
import stickman from "../../assets/OBJ/stickman.obj";
import animal from "../../assets/STL/animal.STL";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01));
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "#EAEAEA" : "orange"} />
    </mesh>
  );
}

const CanvasComponent = (props) => {
  const obj = useLoader(OBJLoader, props.quoteFile);
  const stl = useLoader(STLLoader, animal);

  return (
    <Suspense fallback={<Loader />}>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <pointLight position={[10, 10, 10]} />
        {/* <primitive object={obj} /> */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </Suspense>
  );
};

export default CanvasComponent;
