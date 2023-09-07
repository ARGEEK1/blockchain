"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blockchain = void 0;
const Block_1 = require("./Block");
class Blockchain {
    constructor(genesis, difficulty = "00") {
        this.chain = [this.createFirstBlock(genesis)];
        this.difficulty = difficulty;
    }
    createFirstBlock(genesis) {
        return new Block_1.Block(0, genesis);
    }
    getLastBlock() {
        let length = this.chain.length - 1;
        return this.chain[length];
    }
    addBlock(data) {
        let prevBlock = this.getLastBlock();
        let block = new Block_1.Block(prevBlock.index + 1, data, prevBlock.hash);
        block.mine(this.difficulty);
        console.log(`Minado! ${block.hash} con nonce: ${block.nonce}`);
        this.chain.push(block);
    }
    isValid() {
        for (let i = 0; i < this.chain.length; i++) {
            let prevBlock = this.chain[i - 1];
            let currentBlock = this.chain[i];
            if (currentBlock.previosHash !== prevBlock.hash)
                return false;
            if (currentBlock.createHash() !== currentBlock.hash)
                return false;
        }
        return true;
    }
}
exports.Blockchain = Blockchain;
