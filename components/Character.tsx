import Image from 'next/image';
import React from 'react';

type Props = {};

const Character = (props: Props) => {
  return (
    <div className='p-4 max-w-xs rounded overflow-hidden shadow-lg border-emerald-700 border-2'>
      <Image
      className='mx-auto'
        width={100}
        height={300}
        src='/hulk.png'
        alt='Hulk'
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2 mx-auto'>Hulk</div>
        <p className='text-gray-700 text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #photography
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #travel
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          #winter
        </span>
      </div>
    </div>
  );
};

export default Character;
