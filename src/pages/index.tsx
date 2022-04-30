import Head from "next/head";
import { useState } from "react";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Client from "../core/Client";
import Tabela from './../components/Tabela';

export default function Home() {
  const [client, setClient] = useState(Client.vazio());
  const [page, setPage] = useState(0);
  const [clients, setClients] = useState([
    new Client('João', 10, '1'),
    new Client('Maria', 20, '2'),
    new Client('Pedro', 30, '3'),
    new Client('José', 40, '4'),
    new Client('Paulo', 50, '5'),
  ]);

  function onClientDeleted(client: Client) {
    setClients(clients.filter(c => c.id !== client.id))
    setPage(0)
  }

  function onClientSelected(client: Client) {
    setClient(client)
    setPage(1)
  }

  function onClientUpdated(client: Client) {
    if (client.id) {
      setClients(clients.map(c => c.id === client.id ? client : c))
    } else {
      setClients([...clients, new Client(client.nome, client.idade, (Math.random() * 1000).toFixed(0))])
    }
    setPage(0)
  }

  return (
    <>
      <Head>
        <title>Next CRUD</title>
      </Head>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end">
            {page === 0 && <Button cor="green" onClick={() => { setClient(Client.vazio()); setPage(1) }}>Novo Cliente</Button>}
            {page === 1 && <Button cor="gray" onClick={() => setPage(0)}>Voltar</Button>}
          </div>
          {page === 0 && <Tabela clients={clients} onClientDeleted={onClientDeleted} onClientSelected={onClientSelected} />}
          {page === 1 && <Formulario client={client} onClientDeleted={onClientDeleted} onClientUpdated={onClientUpdated} />}
        </Layout>
      </div>
    </>
  )
}
