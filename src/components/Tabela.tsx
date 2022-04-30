/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Tabela.tsx (c) 2022
Desc: description
Created:  2022-04-30T01:48:20.111Z
Modified: 2022-04-30T03:22:03.594Z
*/

import Client from "../core/Client";
import { IconeEdicao, IconeExcluir } from "./Icones";

interface TabelaProps {
  children?: React.ReactNode;
  clients: Client[];
  onClientSelected?: (client: Client) => void;
  onClientDeleted?: (client: Client) => void;
}

export default function Tabela(props: TabelaProps) {

  const showActions = props.onClientSelected || props.onClientDeleted;

  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions && <th className="text-center p-4">Ações</th>}
      </tr>

    )
  }

  function renderizarDados() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.nome}</td>
          <td className="text-left p-4">{client.idade}</td>
          {showActions && renderizarAcoes(client)}
        </tr>
      )
    })
  }

  function renderizarAcoes(client: Client) {
    return (
      <td className="text-center">
        {props.onClientSelected && (
          <button onClick={() => props.onClientSelected?.(client)} className="m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            {IconeEdicao}
          </button>
        )
        }
        {props.onClientDeleted && (
          <button onClick={() => props.onClientDeleted?.(client)} className="m-2 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
            {IconeExcluir}
          </button>
        )
        }
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
        {renderizarCabecalho()}
      </thead>
      <tbody>
        {renderizarDados()}
      </tbody>
    </table>
  )
}