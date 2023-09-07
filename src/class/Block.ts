import sha256 from "crypto-js/sha256";
import { BlockInterface } from "../interfaces/block.interface";

export class Block implements BlockInterface {
  index: number;
  date: Date;
  data: string;
  previosHash: string;
  hash: string;
  nonce: number = 0;

  constructor(index: number, data: string, previosHash: string = "") {
    this.index = index;
    this.date = new Date();
    this.data = data;
    this.previosHash = previosHash;
    this.hash = this.createHash();
  }

  createHash(): string {
    let hash: string = sha256(
      this.index + this.data + this.date + this.previosHash + this.nonce
    ).toString();
    return hash;
  }

  mine(difficulty: string): void {
    while (!this.hash.startsWith(difficulty)) {
      this.nonce++;
      this.hash = this.createHash();
    }
  }
}
