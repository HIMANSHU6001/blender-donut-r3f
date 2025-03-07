import { OrbitControls, Sky, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { ACESFilmicToneMapping } from "three";
import Donut from "./Donut";
import Lightings from "./Lightings";

const Experience = () => {
  const baseColor = useLoader(THREE.TextureLoader, "/Floor/2K/floor.jpg");
  const metallicMap = useLoader(
    THREE.TextureLoader,
    "/Floor/2K/floor_metallic.jpg"
  );
  const roughnessMap = useLoader(
    THREE.TextureLoader,
    "/Floor/2K/floor_roughness.jpg"
  );
  const normalMap = useLoader(
    THREE.TextureLoader,
    "/Floor/2K/floor_normal.png"
  );

  const floorMaterial = new THREE.MeshStandardMaterial({
    map: baseColor,
    metalnessMap: metallicMap,
    roughnessMap: roughnessMap,
    normalMap: normalMap,
  });
  return (
    <Canvas
      shadows
      gl={{
        outputEncoding: THREE.sRGBEncoding,
        toneMapping: ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
        shadowMapType: THREE.PCFSoftShadowMap,
      }}
    >
      <Lightings />

      <OrbitControls />
      <Sky sunPosition={[1, 1, 1]} />
      <Stage intensity={0.1} environment={"night"}>
        <Donut scale={5} />
      </Stage>
      <mesh
        receiveShadow
        material={floorMaterial}
        rotation={[-Math.PI / 2, 0, 0]}
        position-y={-0.35}
      >
        <planeGeometry args={[10, 10]} />
      </mesh>
    </Canvas>
  );
};

export default Experience;
