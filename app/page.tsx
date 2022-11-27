import Character from '../components/Character';

export default function Home() {
  return (
    <div className='mb-40'>
      <h1 className='text-2xl text-center'>
        Which Marvel Character is stronger?
      </h1>
      <div className='p-2' />
      <div className='flex justify-center items-center max-w-2xl'>
        <Character />
        <div className='my-auto mx-4'>vs</div>
        <Character />
      </div>
    </div>
  );
}
