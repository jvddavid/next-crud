/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Layout.tsx (c) 2022
Desc: description
Created:  2022-04-30T00:58:48.144Z
Modified: 2022-04-30T01:32:29.456Z
*/

import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex flex-col w-2/3 bg-white text-gray-900 rounded-md">
      <Titulo>
        {props.titulo}
      </Titulo>
      <div className="p-6">
        {props.children}
      </div>
    </div>
  )
}