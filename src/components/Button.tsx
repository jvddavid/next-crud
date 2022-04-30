/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Button.tsx (c) 2022
Desc: description
Created:  2022-04-30T03:29:05.258Z
Modified: 2022-04-30T04:04:43.625Z
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
      bg-${cor}-500
      bg-gradient-to-r
      from-${cor}-400
      to-${cor}-800
      text-white
      font-semibold
      py-2
      px-4
      rounded-md
      ${props.className || ''}
    `}>
      {props.children}
    </button>
  )
}