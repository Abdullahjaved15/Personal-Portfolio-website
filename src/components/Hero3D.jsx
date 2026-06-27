import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

// Floating geometric shapes
const FloatingShape = ({ position, color, speed, scale, geometry }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.5;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1.5}
    >
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry}
        <MeshDistortMaterial
          color={color}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

// Central floating code block representation
const CodeBlock = () => {
  const meshRef = useRef();
  const lines = useMemo(() => {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(
        <mesh key={i} position={[-1.2 + Math.random() * 0.5, 0.8 - i * 0.4, 0.51]}>
          <boxGeometry args={[1.5 + Math.random(), 0.05, 0.02]} />
          <meshStandardMaterial color="#64ffda" emissive="#64ffda" emissiveIntensity={0.5} />
        </mesh>
      );
    }
    return items;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
      <group ref={meshRef}>
        {/* Main block */}
        <mesh>
          <boxGeometry args={[3, 2.5, 0.5]} />
          <meshStandardMaterial
            color="#1a1a2e"
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
        {/* Screen glow */}
        <mesh position={[0, 0, 0.26]}>
          <boxGeometry args={[2.8, 2.3, 0.02]} />
          <meshStandardMaterial
            color="#16213e"
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
        {/* Code lines */}
        {lines}
      </group>
    </Float>
  );
};

// Animated particles
const Particles = () => {
  const points = useMemo(() => {
    const particles = new Float32Array(100 * 3);
    for (let i = 0; i < 100; i++) {
      particles[i * 3] = (Math.random() - 0.5) * 20;
      particles[i * 3 + 1] = (Math.random() - 0.5) * 20;
      particles[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return particles;
  }, []);

  const pointsRef = useRef();

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={100}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#64ffda" transparent opacity={0.6} />
    </points>
  );
};

// Main scene
const Scene = () => {
  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#64ffda" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

      {/* Floating shapes */}
      <FloatingShape
        position={[-4, 2, -2]}
        color="#7c3aed"
        speed={0.5}
        scale={0.8}
        geometry={<icosahedronGeometry args={[1, 0]} />}
      />
      <FloatingShape
        position={[4, -2, -3]}
        color="#64ffda"
        speed={0.7}
        scale={0.6}
        geometry={<octahedronGeometry args={[1, 0]} />}
      />
      <FloatingShape
        position={[3, 3, -4]}
        color="#ec4899"
        speed={0.4}
        scale={0.5}
        geometry={<tetrahedronGeometry args={[1, 0]} />}
      />
      <FloatingShape
        position={[-3, -3, -2]}
        color="#f59e0b"
        speed={0.6}
        scale={0.7}
        geometry={<dodecahedronGeometry args={[1, 0]} />}
      />

      {/* Central code block */}
      <CodeBlock />

      {/* Particles */}
      <Particles />

      {/* Subtle rotation controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="hero-3d-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3D;
