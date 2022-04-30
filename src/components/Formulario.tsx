/*
import Formulario from './Formulario';
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Formulario.tsx (c) 2022
Desc: description
Created:  2022-04-30T05:25:31.525Z
Modified: 2022-04-30T16:50:10.037Z
*/

import { useState } from "react";
import Client from "../core/Client";
import Button from "./Button";
import Entrada from './Entrada';

interface FormularioProps {
  client?: Client;
  onClientUpdated?: (client: Client) => void;
  onClientDeleted?: (client: Client) => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.client?.id;
  const [nome, setNome] = useState(props.client?.nome || '');
  const [idade, setIdade] = useState(props.client?.idade || 0);
  return (
    <div className="flex flex-col rounded-lg bg-purple-100 p-4 w-full">
      {id && <Entrada text="Código" value={id} readOnly />}
      <Entrada text="Nome" value={nome} onChange={setNome} />
      <Entrada text="Idade" type="number" value={idade} onChange={(n) => setIdade(Number(n))} min={0} />
      <div className="text-right mt-3">
        <Button className="m-1" cor="green" onClick={() => {
          props.onClientUpdated && props.onClientUpdated(new Client(nome, idade, id));
        }}>
          {id ? 'Atualizar' : 'Cadastrar'}
        </Button>
        <Button className="m-1" cor="red" onClick={() => {
          props.onClientDeleted && props.onClientDeleted(new Client(nome, idade, id));
        }}>{
            id ? 'Excluir' : 'Cancelar'
          }</Button>
      </div>
    </div>
  )
}