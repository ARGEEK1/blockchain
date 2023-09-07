export interface BlockInterface {
  index: number;
  date: Date;
  data: string;
  previosHash: string;
  hash: string;
  nonce: number;
  createHash: () => string;
  mine: (difficulty: string) => void;
}
