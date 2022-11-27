import Character from '../components/Character';

export default function Home() {
  return (
    <div className='flex justify-center max-w-7xl mt-40'>
      <Character />
      <div className='my-auto mx-4'>vs</div>
      <Character />
    </div>
  );
}
