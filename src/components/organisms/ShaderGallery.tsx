import { ShaderCard } from '../molecules/ShaderCard';
import { ShaderName } from '../../shaders';

// Используем локальное изображение из папки /public
const placeholderCardUrl = '/placeholder-card.png';

export const ShaderGallery = () => {
  // We'll display a subset of shaders for the demo.
  const shadersToShow: ShaderName[] = ['holo', 'foil', 'polychrome', 'negative_shine', 'dissolve', 'booster'];

  return (
    <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto'>
      {shadersToShow.map((name) => (
        <div key={name} className='w-full'>
          <h3 className='text-center text-white font-bold mb-4 capitalize text-xl'>{name}</h3>
          <ShaderCard shaderName={name} imageUrl={placeholderCardUrl} />
        </div>
      ))}
    </div>
  );
};

