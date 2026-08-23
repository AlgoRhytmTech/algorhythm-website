import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

const PATH: [number, number, number][] = [
  [-4.2, 1.2, 0],
  [-2.8, 1.2, -0.2],
  [-2.8, 0.1, -0.4],
  [-1.2, 0.1, -0.6],
  [-1.2, -1.1, -0.8],
  [0.8, -1.1, -1.1],
  [0.8, 0.0, -1.4],
  [2.5, 0.0, -1.7],
  [2.5, 1.0, -2],
  [4.1, 1.0, -2.3],
];

function MovingTrace() {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const t = clock.elapsedTime;

    ref.current.rotation.y =
      Math.sin(t * 0.12) * 0.08;

    ref.current.rotation.x =
      Math.sin(t * 0.08) * 0.025;
  });

  return (
    <group ref={ref}>
      {/* Main TRACE path */}
      <Line
        points={PATH}
        color="#6FA3C4"
        lineWidth={2.5}
        transparent
        opacity={0.9}
      />

      {/* Amber execution point */}
      <Float
        speed={1.2}
        rotationIntensity={0}
        floatIntensity={0.2}
      >
        <mesh position={PATH[PATH.length - 1]}>
          <sphereGeometry args={[0.12, 20, 20]} />
          <meshStandardMaterial
            color="#D9A441"
            emissive="#D9A441"
            emissiveIntensity={2.5}
            metalness={0.5}
            roughness={0.15}
          />
        </mesh>
      </Float>

      {/* Trace nodes */}
      {PATH.map((position, index) => (
        <mesh key={index} position={position}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshStandardMaterial
            color={
              index === PATH.length - 1
                ? '#D9A441'
                : '#6FA3C4'
            }
            emissive={
              index === PATH.length - 1
                ? '#D9A441'
                : '#315A70'
            }
            emissiveIntensity={1.2}
          />
        </mesh>
      ))}

      {/* Moving execution particle */}
      <ExecutionParticle />
    </group>
  );
}

function ExecutionParticle() {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;

    const progress =
      (clock.elapsedTime * 0.08) % 1;

    const scaled =
      progress * (PATH.length - 1);

    const index = Math.floor(scaled);
    const local = scaled - index;

    const a = PATH[index];
    const b =
      PATH[Math.min(index + 1, PATH.length - 1)];

    ref.current.position.lerpVectors(
      new THREE.Vector3(...a),
      new THREE.Vector3(...b),
      local,
    );
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.075, 16, 16]} />
      <meshBasicMaterial
        color="#D9A441"
        transparent
        opacity={0.95}
      />
    </mesh>
  );
}

function TraceScene() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;

    group.current.rotation.z =
      Math.sin(clock.elapsedTime * 0.06) * 0.015;
  });

  return (
    <group ref={group}>
      <MovingTrace />

      {/* Ambient depth particles */}
      {Array.from({ length: 24 }).map((_, i) => (
        <Float
          key={i}
          speed={0.2 + (i % 3) * 0.1}
          floatIntensity={0.3}
        >
          <mesh
            position={[
              ((i * 17) % 90) / 10 - 4.5,
              ((i * 23) % 50) / 10 - 2.5,
              -((i * 11) % 35) / 10,
            ]}
          >
            <sphereGeometry
              args={[0.018, 6, 6]}
            />
            <meshBasicMaterial
              color="#527B94"
              transparent
              opacity={0.25}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function TraceHero3D({
  className = '',
  'aria-hidden': ariaHidden = true,
}: {
  className?: string;
  'aria-hidden'?: boolean;
}) {
  return (
    <div
      className={className}
      aria-hidden={ariaHidden}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{
          position: [0, 0, 10],
          fov: 40,
          near: 0.1,
          far: 100,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
      >
        <ambientLight intensity={0.3} />

        <hemisphereLight
          args={['#527B94', '#050709', 0.7]}
        />

        <directionalLight
          position={[4, 5, 5]}
          intensity={1.2}
        />

        <pointLight
          position={[3, 1, 4]}
          intensity={1.5}
          color="#D9A441"
          distance={12}
        />

        <TraceScene />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
}