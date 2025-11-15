/// <reference types="vite/client" />

// Type declaration for importing shader files as raw strings
declare module '*.fs?raw' {
  const content: string;
  export default content;
}

declare module '*.glsl?raw' {
  const content: string;
  export default content;
}

declare module '*.vs?raw' {
  const content: string;
  export default content;
}

declare module '*.frag?raw' {
  const content: string;
  export default content;
}

declare module '*.vert?raw' {
  const content: string;
  export default content;
}

