import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Float } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function Model() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#8B5CF6"
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Background() {
  return (
    <mesh position={[0, 0, -5]}>
      <planeGeometry args={[15, 15]} />
      <meshStandardMaterial
        color="#1a1a1a"
        roughness={0.8}
        metalness={0.2}
      />
    </mesh>
  );
}

export function ProductDisplay() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full relative"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_50%)]" />
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[0, 5, 0]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
        />
        <Suspense fallback={null}>
          <Model />
          <Background />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </motion.div>
  );
}