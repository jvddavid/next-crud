import Head from "next/head";
import Button from "../components/Button";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import useClients from "../hooks/useClients";
import Tabela from './../components/Tabela';

export default function Home() {
  const { page, setPage, client, clients, onClientDeleted, onClientSelected, onClientUpdated, onNewClient } = useClients()

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
