import { ShaderName } from '../shaders';

export interface ShaderPlaneProps {
  shaderName: ShaderName;
  imageUrl: string;
  time: number;
}

export interface ShaderCardProps {
  shaderName: ShaderName;
  imageUrl: string;
  className?: string;
}

