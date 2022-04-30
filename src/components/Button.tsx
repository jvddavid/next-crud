/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Button.tsx (c) 2022
Desc: description
Created:  2022-04-30T03:29:05.258Z
Modified: 2022-04-30T04:23:06.144Z
*/

interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  cor?: 'green' | 'blue' | 'red' | 'yellow' | 'purple' | 'gray';
}

export default function Button(props: ButtonProps) {
  const cor = props.cor || 'gray';
  return (
    <button className={`
      py-2
      px-4
      border-2
      border-solid
      text-white
      hover:border-white
      focus:border-white
      rounded-lg
      transition-all
      duration-200
      bg-gradient-to-r
      ${cor === 'green' ? 'bg-green-500 from-green-400 to-green-800 border-green-300' : ''}
      ${cor === 'blue' ? 'bg-blue-500 from-blue-400 to-blue-800 border-blue-300' : ''}
      ${cor === 'red' ? 'bg-red-500 from-red-400 to-red-800 border-red-300' : ''}
      ${cor === 'yellow' ? 'bg-yellow-500 from-yellow-400 to-yellow-800 border-yellow-300' : ''}
      ${cor === 'purple' ? 'bg-purple-500 from-purple-400 to-purple-800 border-purple-300' : ''}
      ${cor === 'gray' ? 'bg-gray-500 from-gray-400 to-gray-800 border-gray-300' : ''}
      ${props.className}
    `}>
      {props.children}
    </button>
  );
}