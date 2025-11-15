import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export const useShaderAnimation = () => {
  const time = useRef(0);

  useFrame((_, delta) => {
    time.current += delta;
  });

  return time;
};

