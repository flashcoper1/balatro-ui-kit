import { ShaderName } from '../shaders';

export interface ShaderPlaneProps {
  shaderName: ShaderName;
  imageUrl: string;
  time: number;
  isHovering?: boolean;
  mousePos?: THREE.Vector2;
  dissolveValue?: number;
}

export interface ShaderCardProps {
  shaderName: ShaderName;
  imageUrl: string;
  className?: string;
  dissolveValue?: number;
}

