import { useCallback } from 'react';
import '../index.css';

export const Button = () => {
  const onClick = useCallback(() => {
    console.log('Vite + React + TypeScript + Tailwind = ❤️');
  }, []);
  return (
    <button
      onClick={onClick}
      className='bg-indigo-700 hover:bg-indigo-500 hover:shadow-md text-white py-2 px-4 rounded-3xl '
    >
      Button
    </button>
  );
};
