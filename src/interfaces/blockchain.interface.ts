import { Block } from "../class/Block";

export interface BlockchainInterface {
  chain: Block[];
  difficulty: string;
  createFirstBlock: (genesis: string) => Block;
  getLastBlock: () => Block;
  addBlock: (data: string) => void;
  isValid: () => boolean;
}
