import { Blockchain } from "./class/Blockchain";

const geekCoin: Blockchain = new Blockchain("Hola Mundo", "00000");

geekCoin.addBlock("Compra GeekCoin");
geekCoin.addBlock("GeekCoin la mejor crypto");
geekCoin.addBlock("Ya la tengo en mi monedero");

console.log(JSON.stringify(geekCoin.chain, null, 2));
