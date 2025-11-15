import { Canvas } from '@react-three/fiber';
import { ShaderCardProps } from '../../types/ShaderTypes';
import { ShaderPlane } from '../atoms/ShaderPlane';
import { useShaderAnimation } from '../../hooks/useShaderAnimation';

const ShaderCardContent = ({ shaderName, imageUrl }: Omit<ShaderCardProps, 'className'>) => {
  const time = useShaderAnimation();

  return <ShaderPlane shaderName={shaderName} imageUrl={imageUrl} time={time.current} />;
};

export const ShaderCard = ({ shaderName, imageUrl, className }: ShaderCardProps) => {
  return (
<div className={`aspect-[71/95] w-full min-h-[450px] ${className}`}>
      <Canvas>
        <ShaderCardContent shaderName={shaderName} imageUrl={imageUrl} />
      </Canvas>
    </div>
  );
};

