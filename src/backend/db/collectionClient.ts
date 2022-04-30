/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
collectionClient.ts (c) 2022
Desc: description
Created:  2022-04-30T14:47:12.671Z
Modified: 2022-04-30T15:08:05.533Z
*/

import ClientRepo from "../../core/ClientRepo";
import Client from './../../core/Client';
import firebase from './../config';

export default class CollectionClient implements ClientRepo {

  #conversor = {
    toFirestore: (client: Client) => {
      return {
        id: client.id,
        nome: client.nome,
        idade: client.idade,
      }
    },
    fromFirestore: (snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) => {
      const dados = snapshot.data(options);
      return new Client(
        dados.nome,
        dados.idade,
        snapshot.id
      )
    }
  }

  async save(client: Client) {
    if (client.id) {
      await this.collection().doc(client.id).set(client);
      return client;
    } else {
      const docRef = await (await this.collection().add(client));
      const doc = await docRef.get();
      return doc.data();
    }
  }

  async delete(client: Client) {
    return this.collection().doc(client.id).delete();
  }

  async getAll() {
    return (await this.collection().get()).docs.map(doc => doc.data()) ?? [];
  }

  private collection() {
    return firebase.firestore().collection('clientes').withConverter(this.#conversor);
  }
}