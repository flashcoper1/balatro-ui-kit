import { Canvas, useFrame } from '@react-three/fiber';
import { useState, useRef } from 'react';
import * as THREE from 'three';
import { ShaderCardProps } from '../../types/ShaderTypes';
import { ShaderPlane } from '../atoms/ShaderPlane';

const ShaderCardContent = ({ shaderName, imageUrl, dissolveValue, isHovering, mousePos }: Omit<ShaderCardProps, 'className'> & { isHovering: boolean, mousePos: THREE.Vector2 }) => {
  const time = useRef(0);
  useFrame((_, delta) => {
    time.current += delta;
  });

  return <ShaderPlane shaderName={shaderName} imageUrl={imageUrl} time={time.current} isHovering={isHovering} mousePos={mousePos} dissolveValue={dissolveValue} />;
};

export const ShaderCard = ({ shaderName, imageUrl, className, dissolveValue }: ShaderCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const [mousePos, setMousePos] = useState(new THREE.Vector2(0.5, 0.5));
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = 1.0 - (event.clientY - rect.top) / rect.height;
      setMousePos(new THREE.Vector2(x, y));
    }
  };

  return (
    <div
      ref={cardRef}
      className={`aspect-[71/95] w-full min-h-[450px] ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={handleMouseMove}
    >
      <Canvas camera={{ position: [0, 0, 1], fov: 50 }}>
        <ShaderCardContent shaderName={shaderName} imageUrl={imageUrl} dissolveValue={dissolveValue} isHovering={isHovering} mousePos={mousePos} />
      </Canvas>
    </div>
  );
};

