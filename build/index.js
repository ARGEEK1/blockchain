"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Blockchain_1 = require("./class/Blockchain");
const geekCoin = new Blockchain_1.Blockchain("Hola Mundo", "00000");
geekCoin.addBlock("Compra GeekCoin");
geekCoin.addBlock("GeekCoin la mejor crypto");
geekCoin.addBlock("Ya la tengo en mi monedero");
console.log(JSON.stringify(geekCoin.chain, null, 2));
