"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const sha256_1 = __importDefault(require("crypto-js/sha256"));
class Block {
    constructor(index, data, previosHash = "") {
        this.nonce = 0;
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previosHash = previosHash;
        this.hash = this.createHash();
    }
    createHash() {
        let hash = (0, sha256_1.default)(this.index + this.data + this.date + this.previosHash + this.nonce).toString();
        return hash;
    }
    mine(difficulty) {
        while (!this.hash.startsWith(difficulty)) {
            this.nonce++;
            this.hash = this.createHash();
        }
    }
}
exports.Block = Block;
