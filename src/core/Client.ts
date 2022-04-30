/*
Author: João Victor David de Oliveira (j.victordavid2@gmail.com)
Client.ts (c) 2022
Desc: description
Created:  2022-04-30T01:42:38.678Z
Modified: 2022-04-30T01:46:35.502Z
*/

export default class Client {
  #id: string;
  #nome: string;
  #idade: number;

  constructor(nome: string, idade: number, id: string = null) {
    this.#id = id;
    this.#nome = nome;
    this.#idade = idade;
  }

  static vazio(): Client {
    return new Client('', 0);
  }

  get id(): string {
    return this.#id
  }
  get nome(): string {
    return this.#nome
  }
  get idade(): number {
    return this.#idade
  }
}