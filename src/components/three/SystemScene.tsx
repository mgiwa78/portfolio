"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 16;
const NEIGHBORS_PER_NODE = 2;
const ACCENT = "#4c7cff";
const ACCENT_BRIGHT = "#a8bfff";

interface Node {
  position: [number, number, number];
  hub: boolean;
}

function generateGraph(): { nodes: Node[]; edges: [number, number][] } {
  const nodes: Node[] = Array.from({ length: NODE_COUNT }, (_, i) => {
    // distribute roughly on a sphere shell with jitter, so it reads as a
    // volumetric network rather than a flat scatter
    const phi = Math.acos(1 - (2 * (i + 0.5)) / NODE_COUNT);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = 1.6 + Math.random() * 0.5;
    return {
      position: [
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta) * 0.75,
        r * Math.cos(phi),
      ],
      hub: i % 5 === 0,
    };
  });

  const edgeSet = new Set<string>();
  const edges: [number, number][] = [];
  nodes.forEach((node, i) => {
    const distances = nodes
      .map((other, j) => ({
        j,
        d:
          j === i
            ? Infinity
            : new THREE.Vector3(...node.position).distanceTo(
                new THREE.Vector3(...other.position)
              ),
      }))
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBORS_PER_NODE);

    distances.forEach(({ j }) => {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        edges.push([i, j]);
      }
    });
  });

  return { nodes, edges };
}

function Graph({
  reduceMotion,
  scrollProgress,
}: {
  reduceMotion: boolean;
  scrollProgress: React.MutableRefObject<number>;
}) {
  const { nodes, edges } = useMemo(() => generateGraph(), []);
  const groupRef = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group) return;

    if (!reduceMotion) {
      group.rotation.y += delta * 0.09;
      target.current.x = state.pointer.y * 0.15;
      target.current.y = state.pointer.x * 0.25;
      group.rotation.x += (target.current.x - group.rotation.x) * 0.03;
      group.rotation.z += (target.current.y * 0.3 - group.rotation.z) * 0.03;
    }

    // scroll-driven recession: as the hero scrolls away, the system drifts
    // back and fades, handing off from "identity" to "content"
    const p = scrollProgress.current;
    group.position.z = -p * 1.8;
    group.scale.setScalar(1 - p * 0.25);
  });

  return (
    <group ref={groupRef}>
      {edges.map(([a, b], i) => (
        <Line
          key={i}
          points={[nodes[a].position, nodes[b].position]}
          color={ACCENT}
          transparent
          opacity={0.35}
          lineWidth={1}
        />
      ))}
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[node.hub ? 0.05 : 0.028, 8, 8]} />
          <meshBasicMaterial color={node.hub ? ACCENT_BRIGHT : ACCENT} />
        </mesh>
      ))}
    </group>
  );
}

interface SystemSceneProps {
  reduceMotion: boolean;
  scrollProgress: React.MutableRefObject<number>;
}

export default function SystemScene({ reduceMotion, scrollProgress }: SystemSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
      frameloop={reduceMotion ? "demand" : "always"}
    >
      <Graph reduceMotion={reduceMotion} scrollProgress={scrollProgress} />
    </Canvas>
  );
}
