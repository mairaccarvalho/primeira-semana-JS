// fazer comentario de uma linha
/**
 * comentario de varias linhas
 */
//imprimir uma informação no console console.log('Olá, Mundo')
  
// declarando variavel
var nomeAluno =  "aluno(a)" ; //string  == um consjunto de caractere semprer entre aspas ""
var idade = 15 ;//numero inteiro
var salario = 1500.58; // numero reais
var cargo = "Jovem Aprendiz";
var sla = true ;//false
// mostrar o nome do aluno e boas vindas
console.log("Bem-Vindo," , nomeAluno);
console.log("Idade aluno:", idade);
console.log("Salario aluno:", salario + 1000);


var nome1;
var sobreNome;
nome1 = "Maira ";
sobreNome = "Cardoso";

console.log("A ", nome1 + sobreNome + " é aluna de programação Web do IOS. O salario de ", nome1 + "é", +salario + " no cargo de", cargo);

console.log(`A ${nome1} é aluna do ios e tem ${idade + 4} anos de idade`);
 

// exercicios 1
var valor1 = 2;
var valor2 = 3;
console.log('parte 1 do exercicio: ', valor1 + valor2);
// exercicio 2
var tipo = "exercicio 2";
console.log(tipo);
// exercicio 3
var tipo1 = true;
console.log(tipo1);
// exercicio 4
console.log(`exercicio 4 de concatenaçao. Concatenaçao 1: ${nome1}, concatenaçao 2: ${sobreNome}, concatenaçao 3: ${salario}`);
