import { ShaderGallery } from './components/organisms/ShaderGallery';

function App() {
  return (
    <main className='min-h-screen bg-gray-900'>
      <div className='container mx-auto py-10'>
        <h1 className='text-4xl font-bold text-center text-white mb-4'>React Shader Kit</h1>
        <p className='text-center text-gray-400 mb-8'>A demonstration of GLSL shaders in a React Three Fiber environment.</p>
        <ShaderGallery />
      </div>
    </main>
  );
}

export default App;

