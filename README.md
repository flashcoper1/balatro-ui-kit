# Balatro UI Kit - React Shader Kit

A demonstration of GLSL shaders adapted from the LÖVE game engine, running in a React Three Fiber environment.

## Features

- 🎨 Multiple shader effects (holo, foil, polychrome, negative_shine, dissolve, booster, etc.)
- ⚛️ Built with React Three Fiber (R3F)
- 🎮 Shaders adapted from LÖVE game engine to WebGL
- 🎯 TypeScript support
- 💅 Styled with Tailwind CSS
- ⚡ Powered by Vite

## Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   └── ShaderPlane.tsx      # Core rendering component with shader material
│   ├── molecules/
│   │   └── ShaderCard.tsx       # Card component wrapping ShaderPlane
│   └── organisms/
│       └── ShaderGallery.tsx    # Gallery displaying multiple shader cards
├── hooks/
│   └── useShaderAnimation.ts    # Animation hook using useFrame
├── shaders/
│   ├── *.fs                     # Fragment shader files (GLSL)
│   ├── common.glsl              # Common shader header for LÖVE to WebGL translation
│   └── index.ts                 # Shader exports
├── types/
│   └── ShaderTypes.ts           # TypeScript interfaces
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles with Tailwind

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Shaders

- **holo** - Holographic effect with rainbow colors
- **foil** - Metallic foil reflection effect
- **polychrome** - Multi-color effect
- **negative_shine** - Inverted shine effect
- **dissolve** - Dissolve/fade effect
- **booster** - Booster pack effect
- And more...

## Technology Stack

- **React** - UI framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling

## License

ISC

