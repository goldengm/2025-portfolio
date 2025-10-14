import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, Box, Torus, Octahedron } from '@react-three/drei';
import * as THREE from 'three';

// Enhanced Particle System Component
const ParticleField: React.FC = () => {
  const meshRef = useRef<THREE.Points>(null);
  
  const [particles] = useState(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    return positions;
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={meshRef} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00f5ff"
        size={1.2}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        vertexColors={false}
      />
    </Points>
  );
};

// Enhanced Floating Geometric Shapes
const FloatingShapes: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.x = state.clock.elapsedTime * 0.12;
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.18;
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Enhanced Floating Sphere */}
      <Sphere
        args={[3, 32, 32]}
        position={[12, 6, -8]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#00f5ff"
          transparent
          opacity={0.4}
          wireframe
          emissive="#00f5ff"
          emissiveIntensity={0.3}
        />
      </Sphere>

      {/* Enhanced Floating Box */}
      <Box
        args={[4, 4, 4]}
        position={[-10, -4, -12]}
        rotation={[0.5, 0.5, 0]}
      >
        <meshStandardMaterial
          color="#bf00ff"
          transparent
          opacity={0.35}
          wireframe
          emissive="#bf00ff"
          emissiveIntensity={0.25}
        />
      </Box>

      {/* Enhanced Floating Torus */}
      <Torus
        args={[3, 0.8, 16, 100]}
        position={[8, -6, -18]}
        rotation={[0.3, 0.3, 0]}
      >
        <meshStandardMaterial
          color="#ff0080"
          transparent
          opacity={0.4}
          wireframe
          emissive="#ff0080"
          emissiveIntensity={0.3}
        />
      </Torus>

      {/* Enhanced Floating Octahedron */}
      <Octahedron
        args={[2]}
        position={[-15, 10, -22]}
        rotation={[0.2, 0.4, 0.1]}
      >
        <meshStandardMaterial
          color="#00ff80"
          transparent
          opacity={0.4}
          wireframe
          emissive="#00ff80"
          emissiveIntensity={0.3}
        />
      </Octahedron>

      {/* Additional geometric shapes for more visual interest */}
      <Sphere
        args={[1.5, 16, 16]}
        position={[6, 12, -15]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#ff6b00"
          transparent
          opacity={0.3}
          wireframe
          emissive="#ff6b00"
          emissiveIntensity={0.2}
        />
      </Sphere>

      <Box
        args={[2, 2, 2]}
        position={[-6, -10, -20]}
        rotation={[0.8, 0.2, 0.4]}
      >
        <meshStandardMaterial
          color="#9d4edd"
          transparent
          opacity={0.3}
          wireframe
          emissive="#9d4edd"
          emissiveIntensity={0.2}
        />
      </Box>
    </group>
  );
};

// Enhanced Animated Grid
const AnimatedGrid: React.FC = () => {
  const gridRef = useRef<THREE.GridHelper>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.15;
      gridRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.12) * 0.12;
      gridRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    }
  });

  return (
    <gridHelper
      ref={gridRef}
      args={[120, 120, '#00f5ff', '#00f5ff']}
      position={[0, -25, 0]}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
};

// Enhanced Energy Waves
const EnergyWaves: React.FC = () => {
  const waveRef = useRef<THREE.Mesh>(null);
  const wave2Ref = useRef<THREE.Mesh>(null);
  const wave3Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (waveRef.current) {
      waveRef.current.rotation.x = state.clock.elapsedTime * 0.25;
      waveRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      waveRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2.5) * 0.15);
    }
    if (wave2Ref.current) {
      wave2Ref.current.rotation.x = -state.clock.elapsedTime * 0.18;
      wave2Ref.current.rotation.y = -state.clock.elapsedTime * 0.12;
      wave2Ref.current.scale.setScalar(1 + Math.cos(state.clock.elapsedTime * 1.8) * 0.12);
    }
    if (wave3Ref.current) {
      wave3Ref.current.rotation.x = state.clock.elapsedTime * 0.1;
      wave3Ref.current.rotation.y = state.clock.elapsedTime * 0.08;
      wave3Ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.1);
    }
  });

  return (
    <group>
      <mesh ref={waveRef} position={[0, 0, -25]}>
        <ringGeometry args={[8, 20, 32]} />
        <meshBasicMaterial
          color="#00f5ff"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={wave2Ref} position={[0, 0, -35]}>
        <ringGeometry args={[12, 25, 32]} />
        <meshBasicMaterial
          color="#bf00ff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={wave3Ref} position={[0, 0, -40]}>
        <ringGeometry args={[15, 30, 32]} />
        <meshBasicMaterial
          color="#ff0080"
          transparent
          opacity={0.08}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
};

// Enhanced Main 3D Scene Component
const Scene3D: React.FC = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[15, 15, 15]} intensity={0.8} color="#00f5ff" />
      <pointLight position={[-15, -15, -15]} intensity={0.6} color="#bf00ff" />
      <pointLight position={[0, 15, -15]} intensity={0.7} color="#ff0080" />
      <pointLight position={[10, -10, 10]} intensity={0.5} color="#00ff80" />
      <pointLight position={[-10, 10, -10]} intensity={0.4} color="#ff6b00" />
      
      <ParticleField />
      <FloatingShapes />
      <AnimatedGrid />
      <EnergyWaves />
    </>
  );
};

// Main Background3D Component
const Background3D: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 z-0">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading-dots">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0">
      <Canvas
        camera={{
          position: [0, 0, 30],
          fov: 75,
        }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene3D />
      </Canvas>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-blue-900/60 to-purple-900/80 pointer-events-none" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-to-br from-neon-pink/20 to-neon-green/20 rounded-full blur-3xl animate-float animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-neon-purple/10 to-neon-blue/10 rounded-full blur-3xl animate-float animation-delay-4000" />
      </div>
    </div>
  );
};

export default Background3D;
