import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import CollectionClient from "../backend/db/collectionClient";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Client from "../core/Client";
import Tabela from './../components/Tabela';
import ClientRepo from './../core/ClientRepo';

export default function Home() {
  const repo = useRef<ClientRepo>(new CollectionClient())

  const [client, setClient] = useState(Client.vazio());
  const [page, setPage] = useState(0);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    repo.current.getAll().then(setClients);
  }, [repo])

  async function onClientDeleted(client: Client) {
    if (client.id) {
      await repo.current.delete(client);
    }
    setClients(clients.filter(c => c.id !== client.id));
    setPage(0)
  }

  async function onClientUpdated(client: Client) {
    if (client.id) {
      await repo.current.save(client);
      setClients(clients.map(c => c.id === client.id ? client : c))
    } else {
      const newClient = await repo.current.save(client);
      setClients([...clients, newClient])
    }
    setPage(0)
  }

  function onNewClient() {
    setClient(Client.vazio())
    setPage(1)
  }

  function onClientSelected(client: Client) {
    setClient(client)
    setPage(1)
  }

  return (
    <>
      <Head>
        <title>Next CRUD</title>
      </Head>
      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <Layout titulo="Cadastro Simples">
          <div className="flex justify-end mb-3">
            {page === 0 && <Button cor="green" onClick={onNewClient}>Novo Cliente</Button>}
            {page === 1 && <Button cor="gray" onClick={() => setPage(0)}>Voltar</Button>}
          </div>
          {page === 0 && <Tabela clients={clients} onClientDeleted={onClientDeleted} onClientSelected={onClientSelected} />}
          {page === 1 && <Formulario client={client} onClientDeleted={onClientDeleted} onClientUpdated={onClientUpdated} />}
        </Layout>
      </div>
    </>
  )
}
