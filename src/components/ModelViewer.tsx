import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/model.glb");

  return <primitive object={scene} />;
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      <Model />

      <OrbitControls />
    </Canvas>
  );
}
