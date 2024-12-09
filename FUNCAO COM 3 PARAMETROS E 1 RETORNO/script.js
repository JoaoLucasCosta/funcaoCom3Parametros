function calculaPrecoFinal(produto, preco, aliquota) {
    return preco + (preco * (aliquota / 100));
}

const prompt = require("prompt-sync")();  

let produto = prompt("Digite o nome do produto: ");
let preco = Number(prompt("Digite o preço: "));
let imposto = Number(prompt("Digite a alíquota de imposto (%): "));

let precoFinal = calculaPrecoFinal(produto, preco, imposto);

console.log(`O produto ${produto} tem o preço final de R$ ${precoFinal.toFixed(2)}, já com o imposto de ${imposto}% calculado.`);
