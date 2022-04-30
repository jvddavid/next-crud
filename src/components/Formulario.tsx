/*
import Formulario from './Formulario';
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Formulario.tsx (c) 2022
Desc: description
Created:  2022-04-30T05:25:31.525Z
Modified: 2022-04-30T05:46:00.246Z
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
    <div className="flex flex-col">
      {id && <Entrada text="Código" value={id} readOnly />}
      <Entrada text="Nome" value={nome} onChange={setNome} />
      <Entrada text="Idade" value={idade} onChange={(n) => setIdade(Number(n))} min={0} />
      <div className="flex justify-end mt-3">
        <Button className="mx-2" cor="green" onClick={() => {
          props.onClientUpdated && props.onClientUpdated(new Client(nome, idade, id));
        }}>
          {id ? 'Atualizar' : 'Cadastrar'}
        </Button>
        <Button cor="red" onClick={() => {
          props.onClientUpdated && props.onClientUpdated(new Client(nome, idade, id));
        }}>{
            id ? 'Excluir' : 'Cancelar'
          }</Button>
      </div>
    </div>
  )
}