/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Titulo.tsx (c) 2022
Desc: description
Created:  2022-04-30T01:01:45.113Z
Modified: 2022-04-30T01:32:09.054Z
*/

export default function Titulo(props) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="px-5 py-2 text-2xl">
        {props.children}
      </h1>
      <hr className="border-2 border-purple-500" />
    </div>
  )
}