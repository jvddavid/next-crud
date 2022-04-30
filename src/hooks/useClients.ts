/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
useClients.ts (c) 2022
Desc: description
Created:  2022-04-30T16:02:37.615Z
Modified: 2022-04-30T16:04:50.079Z
*/

import { useEffect, useRef, useState } from "react";
import CollectionClient from "../backend/db/collectionClient";
import Client from "../core/Client";
import ClientRepo from "../core/ClientRepo";

export default function useClients() {
  const repo = useRef<ClientRepo>(new CollectionClient())

  const [client, setClient] = useState(Client.vazio());
  const [page, setPage] = useState(0);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClients()
  }, [repo])

  async function getClients() {
    await repo.current.getAll().then(setClients);
    setPage(0)
  }

  async function onClientDeleted(client: Client) {
    if (client.id) {
      await repo.current.delete(client);
    }
    await getClients();
  }

  async function onClientUpdated(client: Client) {
    if (client.id) {
      await repo.current.save(client);
    } else {
      await repo.current.save(client);
    }
    await getClients();
  }

  function onNewClient() {
    setClient(Client.vazio())
    setPage(1)
  }

  function onClientSelected(client: Client) {
    setClient(client)
    setPage(1)
  }

  return {
    client,
    page,
    setPage,
    clients,
    onClientDeleted,
    onClientUpdated,
    onNewClient,
    onClientSelected
  }

}