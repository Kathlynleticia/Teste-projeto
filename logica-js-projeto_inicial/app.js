//alert('Boas vindas ao nosso site!');
//let nome = 'Lua';
//let idade = 25;
//let numeroDeVendas = 50;
//let saldoDisponivel = 1000;
//alert('Erro! Preencha todos os campos');
//let mensagemDeErro = 'Erro! Preencha todos os campos';
//alert(mensagemDeErro);
//let nomePessoa = prompt('Digite seu nome:');
//let idadePessoa = prompt('Digite sua idade: ')
//if(idadePessoa >= 18) {
//    alert('Já pode tirar sua Habilitaçao');
//}

/*let contador = 1;
//enquanto contador for menor ou igual a 10 ele continua rodando
while (contador <= 10) {
    console.log('Contando... ' + contador);
   contador++;
}*/

//----

/*let contador = 10;
//enquanto contador for maior ou igual a 0 ele continua rodando
while (contador >= 0) {
console.log('Contando... ' + contador);
contador--;
}*/

//------

/*let numeroMaximo = prompt("Digite um número para a contagem regressiva:");

while (numeroMaximo >= 0) {
    console.log(numeroMaximo);
    numeroMaximo--;
}*/

/*let numeroMaximo = prompt("Digite um número para a contagem progressiva:");
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++;
}*/

/*let idade = 15;
let possuiCarteira = true;

// se idade é maior que 18 e possui carteira…
if (idade > 18 && possuiCarteira) {
  console.log("Pode dirigir!");
} else {
  console.log("Não pode dirigir.");
}
*/

/*let temMaça = false;
let temBanana = true;

// se tem maça ou tem banana…
if (temMaça || temBanana) {
  console.log("Você tem frutas!");
} else {
  console.log("Não tem frutas.");
}*/


//quantidade de vezes que eu vou falar os números
//let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
// É a variável que armazena a soma total dos números que o usuário digitou. 
//let soma = 0;
// que começa com o valor de qtdNumeros e será usado para controlar quantas tentativas ainda restam.
//let contador = qtdNumeros;

//while(contador > 0){
//    let numero = parseInt(prompt('Digite o numero:'));
    //É o valor que o usuário acabou de inserir.
    //O operador += é um atalho para somar. Então, soma += numero; é equivalente a escrever soma = soma + numero;.
//    soma += numero;
//    contador--;
//}

//let media = soma / qtdNumeros;

//console.log(media);

//Isso significa que, a cada vez que o usuário digita um número, esse número é adicionado ao total que já está na variável soma. Assim, ao final do loop, soma terá a soma de todos os números que foram digitados.

//console.log('BOAS VINDAS!')

//let nome = prompt('Escreva seu nome: ');
//console.log(`Seja muito bem vinda ${nome}!!`);

//let nome = prompt('Escreva seu nome: ');
//alert(`Seja muito bem vinda ${nome}!!`);

//let linguagemProgramacao = prompt('Escreva a linguagem de programação que voce mais gosta: ');
//console.log(linguagemProgramacao);

/*let valor1 = 22;
let valor2 = 23;
let resultadoValor =  valor1 + valor2;
console.log(`A soma entre os valores ${valor1} e ${valor2} é ${resultadoValor}!`);*/

/*let valor1 = 23;
let valor2 = 22;
let resultadoValor =  valor1 - valor2;
console.log(`O Resultado da subtração entre os valores ${valor1} e ${valor2} é ${resultadoValor}!`);*/

/*let idade = prompt('Digite sua idade aqui: ');
if(idade >= 18) {
  console.log('Voce já é maior de idade!');
} else {
  console.log('Voce ainda ´menor de idade!');
}*/

/*var numero = parseFloat(prompt("Digite um número:"));

if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}*/

/*let nota = 6.0
if(nota >= 7) {
  console.log('Voce foi aprovado!');
} else {
  console.log('Voce foi reprovado!');
}*/

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

numeroAleatorio = parseInt(Math.random() * 1000 + 1);
console.log(numeroAleatorio);
