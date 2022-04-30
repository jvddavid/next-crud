/*
import Entrada from './Entrada';
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Entrada.tsx (c) 2022
Desc: description
Created:  2022-04-30T04:26:18.744Z
Modified: 2022-04-30T04:45:22.858Z
*/

interface EntradaProps {
  type?: 'text' | 'number' | 'password';
  text: string;
  value: string | number;
  min?: number;
  max?: number;
  readOnly?: boolean;
  onChange?: (value: string) => void;
}

export default function Entrada(props: EntradaProps) {
  const id = `${Date.now()}-${props.text}`;
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="m-2">
        {props.text}
      </label>
      <input className={`
        border border-purple-500 rounded-lg px-4 py-2
        bg-gray-50
        focus:outline-none
        ${props.readOnly ? '' : 'focus:border-purple-900 focus:bg-white'}	
      
      `} id={id} type={props.type || 'text'} value={props.value} readOnly={props.readOnly} onChange={(e) => props.onChange?.(e.target.value)}
        min={props.min} max={props.max}
      />
    </div>
  )
}