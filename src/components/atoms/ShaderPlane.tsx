import * as THREE from 'three';
import { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { shaders } from '../../shaders';
import commonShader from '../../shaders/common.glsl?raw';
import { ShaderPlaneProps } from '../../types/ShaderTypes';

export const ShaderPlane = ({ shaderName, imageUrl, time }: ShaderPlaneProps) => {
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  const fragmentShader = useMemo(() => {
    let specificShader = shaders[shaderName];

    // Convert LÖVE types to GLSL types
    specificShader = specificShader
      // Replace LÖVE 'number' type with 'float'
      .replace(/\bnumber\b/g, 'float')
      // Replace LÖVE 'Image' type with 'sampler2D'
      .replace(/\bImage\b/g, 'sampler2D')
      // Comment out 'extern' declarations (uniforms are in common.glsl)
      .replace(/^extern\s+/gm, '// extern ');

    // Remove the precision macro definitions from shader files since they're in common.glsl
    specificShader = specificShader.replace(
      /#if defined\(VERTEX\)[^#]*#endif/s,
      '// Precision macro removed - defined in common.glsl'
    );

    // Find and replace the effect function
    const effectMatch = specificShader.match(/vec4\s+effect\s*\([^)]*\)\s*{([\s\S]*?)^}/m);
    if (effectMatch) {
      let functionBody = effectMatch[1];

      // Replace return statements with gl_FragColor assignments
      functionBody = functionBody.replace(/return\s+([^;]+);/g, 'gl_FragColor = $1;');

      // Map LÖVE variables to GLSL equivalents in function body
      functionBody = functionBody
        .replace(/\btexture_coords\b/g, 'vUv')
        .replace(/\bscreen_coords\b/g, 'gl_FragCoord.xy')
        .replace(/Texel\s*\(\s*texture\s*,/g, 'texture2D(uTexture,')
        .replace(/\bcolour\b/g, 'vec4(1.0)'); // Replace colour parameter with default

      // Keep helper functions and replace just the effect function
      const beforeEffect = specificShader.substring(0, effectMatch.index);
      const afterEffect = specificShader.substring(effectMatch.index + effectMatch[0].length);

      specificShader = `${beforeEffect}\nvoid main() {\n${functionBody}\n}\n${afterEffect}`;
    }

    return `${commonShader}\n\nvarying vec2 vUv;\n\n${specificShader}`;
  }, [shaderName]);

  const uniforms = useMemo(
    () => ({
      time: { value: time },
      uTexture: { value: texture },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      // Common shader uniforms with default values
      dissolve: { value: 0.0 },
      foil: { value: new THREE.Vector2(time * 0.5, time * 0.2) },
      holo: { value: new THREE.Vector2(time * 0.1, 0) },
      polychrome: { value: new THREE.Vector2(0, 0) },
      negative_shine: { value: new THREE.Vector2(0, 0) },
      booster: { value: new THREE.Vector2(0, 0) },
      voucher: { value: new THREE.Vector2(0, 0) },
      // Additional shader parameters
      texture_details: { value: new THREE.Vector4(0, 0, 1, 1) },
      image_details: { value: new THREE.Vector2(texture.image?.width || 512, texture.image?.height || 512) },
      shadow: { value: false },
      burn_colour_1: { value: new THREE.Vector4(1, 0.5, 0, 1) },
      burn_colour_2: { value: new THREE.Vector4(1, 0, 0, 1) },
      mouse_screen_pos: { value: new THREE.Vector2(0, 0) },
      hovering: { value: 0.0 },
      screen_scale: { value: 1.0 },
      vortex_amt: { value: 0.5 },
      vort_speed: { value: 1.0 },
      colour_1: { value: new THREE.Vector4(0.2, 0.4, 1, 1) },
      colour_2: { value: new THREE.Vector4(1, 0.2, 0.8, 1) },
      mid_flash: { value: 0.0 },
      vort_offset: { value: 0.0 },
    }),
    [time, texture]
  );

  return (
    <mesh>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        key={shaderName} // Re-compile material when shader changes
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const vertexShader = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

