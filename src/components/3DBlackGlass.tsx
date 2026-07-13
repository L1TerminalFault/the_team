import { Canvas, useFrame } from "@react-three/fiber";
import { useCubeStore } from "@/store/useCubeStore";
import { useRef } from "react";
import type * as THREE from "three";

export const cubeState = { speedMultiplier: 1, scale: 1 };
import {
  OrbitControls,
  Environment,
  RoundedBox,
  MeshTransmissionMaterial,
  PresentationControls
} from "@react-three/drei";

function GlassCube() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15 * cubeState.speedMultiplier;
      meshRef.current.rotation.y += delta * 0.25 * cubeState.speedMultiplier;
      meshRef.current.rotation.z += delta * 0.12 * cubeState.speedMultiplier;
      
      meshRef.current.scale.set(cubeState.scale, cubeState.scale, cubeState.scale);
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[2, 2, 2]} radius={0.15} smoothness={4}>
      <MeshTransmissionMaterial
        backside
        samples={8}
        resolution={256}
        transmission={1}
        roughness={0}
        thickness={1.2}
        ior={1.5}
        chromaticAberration={0.02}
        anisotropy={0}
        distortion={0}
        distortionScale={0}
        temporalDistortion={0}
        clearcoat={0}
        attenuationDistance={0.5}
        attenuationColor="#ffffff"
      />
    </RoundedBox>
  );
}

export default function GlassCubeComponent({
  className = "",
}: {
  className: string;
}) {
  return (
    <div
      className={`absolute pointer-events-none /h-full /w-full ${className}`}
    >
      <Canvas
        onCreated={() => useCubeStore.getState().setCubeLoaded(true)}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          preserveDrawingBuffer: false,
          powerPreference: "high-performance",
        }}
        style={{ background: "transparent" }}
        className="pointer-events-auto cursor-grab active:cursor-grabbing"
      >
        {/* LIGHTING (minimal) */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />

        {/* OBJECT wrapped inside interactive PresentationControls */}
        <PresentationControls
          global={false} // Only spin on dragging the actual object wrapper
          cursor={true}
          snap={true} // Snap back to its normal rotation after drag!
          speed={2} // Speed multiplier
          zoom={1}
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 3, Math.PI / 3]} // Vertical limits
          azimuth={[-Math.PI / 1.4, Math.PI / 2]} // Horizontal limits
        >
          <GlassCube />
        </PresentationControls>

        {/* ENV (keep but it’s important for glass) */}
        <Environment preset="studio" />
      </Canvas>
    </div>
  );
}
