import { useRef } from "react";


const Lightings = () => {
  const dlight = useRef(null);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        ref={dlight}
        position={[5, 5, 5]}
        intensity={3}
        castShadow
        shadow-mapSize={1024}
        shadow-normalBias={0.05}
        shadow-camera-far={11}
        shadow-camera-near={4}
        shadow-camera-left={-1}
        shadow-camera-right={1}
        shadow-camera-top={1}
        shadow-camera-bottom={-1}
      />
    </>
  );
};

export default Lightings;
