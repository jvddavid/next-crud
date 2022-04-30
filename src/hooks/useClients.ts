/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
useClients.ts (c) 2022
Desc: description
Created:  2022-04-30T16:02:37.615Z
Modified: 2022-04-30T16:55:38.210Z
*/

import { useEffect, useState } from "react";
import CollectionClient from "../backend/db/collectionClient";
import Client from "../core/Client";
import usePage from "./usePage";

export default function useClients() {
  const { page, setPage } = usePage();

  const repo = new CollectionClient()

  const [client, setClient] = useState(Client.vazio());
  const [clients, setClients] = useState([]);

  useEffect(() => void getClients())

  async function getClients() {
    await repo.getAll().then(setClients);
  }

  async function onClientDeleted(client: Client) {
    if (client.id) {
      await repo.delete(client);
    }
    await getClients();
    setPage(0)
  }

  async function onClientUpdated(client: Client) {
    if (client.id) {
      await repo.save(client);
    } else {
      await repo.save(client);
    }
    await getClients();
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

  return {
    page,
    setPage,
    client,
    clients,
    onClientDeleted,
    onClientUpdated,
    onNewClient,
    onClientSelected
  }

}