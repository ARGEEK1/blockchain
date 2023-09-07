import { Block } from "./Block";
import { BlockchainInterface } from "../interfaces/blockchain.interface";

export class Blockchain implements BlockchainInterface {
  chain: Block[];
  difficulty: string;

  constructor(genesis: string, difficulty: string = "00") {
    this.chain = [this.createFirstBlock(genesis)];
    this.difficulty = difficulty;
  }

  createFirstBlock(genesis: string): Block {
    return new Block(0, genesis);
  }

  getLastBlock(): Block {
    let length: number = this.chain.length - 1;
    return this.chain[length];
  }

  addBlock(data: string): void {
    let prevBlock: Block = this.getLastBlock();
    let block: Block = new Block(prevBlock.index + 1, data, prevBlock.hash);
    block.mine(this.difficulty);
    console.log(`Minado! ${block.hash} con nonce: ${block.nonce}`);
    this.chain.push(block);
  }

  isValid(): boolean {
    for (let i = 0; i < this.chain.length; i++) {
      let prevBlock: Block = this.chain[i - 1];
      let currentBlock: Block = this.chain[i];
      if (currentBlock.previosHash !== prevBlock.hash) return false;
      if (currentBlock.createHash() !== currentBlock.hash) return false;
    }
    return true;
  }
}
