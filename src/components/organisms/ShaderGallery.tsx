import { ShaderCard } from '../molecules/ShaderCard';
import { ShaderName } from '../../shaders';

const placeholderCardUrl = '/placeholder-card.png';

export const ShaderGallery = () => {
  const shadersToShow: ShaderName[] = ['holo', 'foil', 'polychrome', 'negative_shine', 'dissolve', 'booster'];

  return (
    <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {shadersToShow.map((name) => (
        <div key={name}>
          <h3 className='text-center text-white font-bold mb-2 capitalize'>{name.replace('_', ' ')}</h3>
          <ShaderCard
            shaderName={name}
            imageUrl={placeholderCardUrl}
          />
        </div>
      ))}
    </div>
  );
};

