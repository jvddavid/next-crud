/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
ClientRepo.ts (c) 2022
Desc: description
Created:  2022-04-30T14:45:51.982Z
Modified: 2022-04-30T14:48:05.999Z
*/

import Client from "./Client";

export default interface ClientRepo {
  save(client: Client): Promise<Client>;
  delete(client: Client): Promise<void>;
  getAll(): Promise<Client[]>;
}