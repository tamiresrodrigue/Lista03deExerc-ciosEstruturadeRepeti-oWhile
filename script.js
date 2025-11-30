const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")






function ex01() {
    let contadora = 0
    while (contadora <11) {
         document.write(contadora)
        contadora++
    }

}

btnEx01.addEventListener('click', ex01)


function ex02() {
    let contadora = 1
    while (contadora<101){
        document.write(contadora +"-")
        contadora++
    }

  

}

btnEx02.addEventListener('click', ex02)


function ex03() {
  let contadora  = 1
  while(contadora  <= 50){
    if(contadora % 2===0){
        document.write(contadora + " - ")
    }
      contadora ++;

  } 

}
btnEx03.addEventListener('click', ex03)


function ex04() {

    let i = 0;
    let soma = 0;
    
    do {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número:`));
    soma += numero;
    i++;
    } while (i < 5);
    
    const media = soma / 5;
     document.write(`A média aritmética dos números é: ${media.toFixed(2)}`);

}


btnEx04.addEventListener('click', ex04)

function ex05() {

   let numero = parseInt(prompt("Digite um número para ver a sua tabuada:"));
let contador = 1;

if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número inteiro.");
} else {
     document.write("Tabuada do " + numero +" " + ":" + " ");
    do {
        let resultado = numero * contador;
        document.write(" " +  " - " + numero + " x " + contador + " = " + resultado);
        contador++;
    } while (contador <= 10);
}
}

btnEx05.addEventListener('click', ex05)

function ex06() {

    let numero;
let i = 1;

// Solicita um número inteiro positivo
do {
  numero = parseInt(prompt("Digite um número inteiro positivo:"));
} while (isNaN(numero) || numero <= 0); // Valida se é um número e se é maior que 0

 document.write(`Os divisores de ${numero} são:`);

// Loop do-while para encontrar os divisores
do {
  // Verifica se o número é divisível pelo contador
  if (numero % i === 0) {
     document.write(i +" - ");
  }
  i++;
} while (i <= numero); // O loop continua enquanto o contador for menor ou igual ao número
}
btnEx06.addEventListener('click', ex06)

function ex07(){

    let numero = parseInt(prompt("Digite um número inteiro:"));
let ehPrimo = true;
let i = 2;

// Números menores ou iguais a 1 não são primos
if (numero <= 1) {
    ehPrimo = false;
} else {
    // Loop do-while para verificar a divisibilidade
    do {
        // Se o número for divisível por qualquer número (exceto 1 e ele mesmo), não é primo
        if (numero % i === 0) {
            ehPrimo = false;
            break; // Sai do loop se encontrar um divisor
        }
        i++;
    } while (i < numero);
}

// Exibe o resultado
if (ehPrimo) {
     document.write(numero + " é um número primo.");
} else {
    document.write(numero + " não é um número primo.");
}
}
btnEx07.addEventListener('click', ex07)

function ex08(){
    let limite = parseInt(prompt("Digite o número inteiro para o limite da sequência Fibonacci:"));

let a = 0;
let b = 1;
let proximo;

if (limite >= 0) {
   document.write("Sequência de Fibonacci até " + limite + ":<br>");
  do {
     document.write(a + " ");
    proximo = a + b;
    a = b;
    b = proximo;
  } while (a <= limite);
} else {
  document.write("Por favor, insira um número inteiro não negativo.");
}
}
btnEx08.addEventListener('click', ex08)

function ex09() {

     let contador = 0;
        let somaDasIdades = 0;

        do {
            const nome = prompt(`Digite o nome da pessoa ${contador + 1}:`);
            let idade = parseInt(prompt(`Digite a idade de ${nome}:`));

            // Valida a entrada para garantir que a idade é um número válido
            while (isNaN(idade)) {
                 document.write("Idade inválida! Por favor, digite um número.");
                idade = parseInt(prompt(`Digite a idade de ${nome}:`));
            }

            somaDasIdades += idade;
            contador++;

        } while (contador < 5);

        const mediaIdades = somaDasIdades / 5;

        document.write(`<h2>Resultado:</h2>`);
        document.write(`A soma total das idades é: ${somaDasIdades}<br>`);
        document.write(`A média das idades é: ${mediaIdades.toFixed(2)}`);
}
btnEx09.addEventListener('click', ex09)

function ex10() {

    let a = 0;
let b = 1;
let contador = 0;

 document.write("Os primeiros 20 números da sequência de Fibonacci são:");

do {
   document.write(a + " - ");
  let proximoNumero = a + b;
  a = b;
  b = proximoNumero;
  contador++;
} while (contador < 20);

}
btnEx10.addEventListener('click', ex10)

function ex11() {

    let numeroLido = prompt("Digite um número inteiro:");
let numero = parseInt(numeroLido);
let soma = 0;
let i = 1;

if (Number.isInteger(numero)) {
  do {
    if (i % 2 === 0) {
      soma += i;
    }
    i++;
  } while (i <= numero);

  document.write("A soma dos números pares entre 1 e " + numero + " é: " + soma);
} else {
  document.write("Por favor, digite um número inteiro válido.");
}
}
btnEx11.addEventListener('click', ex11)

function ex12() {

    let numero = 1;

do {
  if (numero % 2 !== 0) {
    document.write(numero + " - ");
  }
  numero++;
} while (numero <= 50);


}
btnEx12.addEventListener('click', ex12)

function ex13() {

    // Função para exibir os dígitos de um número separadamente usando do-while
function exibirDigitos(numero) {
  // Garante que o número é um inteiro positivo para evitar comportamentos inesperados
  numero = Math.abs(Math.floor(numero));

  if (isNaN(numero)) {
    console.log("Entrada inválida. Por favor, digite um número inteiro.");
    return;
  }

  // Tratamento especial para o número 0
  if (numero === 0) {
    console.log("Dígitos: 0");
    return;
  }

  document.write(`Dígitos de ${numero+ " - "}`);

  // O loop do-while executa o bloco de código pelo menos uma vez antes de verificar a condição
  do {
    // Obtém o último dígito usando o operador módulo
    const digito = numero % 10;
    document.write(digito + " - ");

    // Remove o último dígito do número
    numero = Math.floor(numero / 10);

  } while (numero > 0); // Continua enquanto o número for maior que 0
}

// Exemplo de uso
exibirDigitos(12345);
exibirDigitos(987);
exibirDigitos(0);
exibirDigitos(-456);
exibirDigitos(100);


}
btnEx13.addEventListener('click', ex13)

function ex14() {

    let numero = parseInt(prompt("Digite um número inteiro positivo para calcular o fatorial:"));
let fatorial = 1;
let i = 1;

// Valida se o input é um número e não é negativo
if (isNaN(numero) || numero < 0) {
  alert("Por favor, insira um número inteiro não negativo.");
} else {
  // Caso o número seja 0, o fatorial é 1, o loop não será executado
  if (numero === 0) {
    document.write(`O fatorial de ${numero} é 1.`);
  } else {
    // Loop do-while para calcular o fatorial
    do {
      fatorial *= i;
      i++;
    } while (i <= numero);

    document.write(`O fatorial de ${numero} é ${fatorial}.`);
  }
}
}
btnEx14.addEventListener('click', ex14)

function ex15() {
let nome = '';
let idade;
let totalIdades = 0;
let contadorPessoas = 0;

do {
  // Solicita o nome da pessoa
  nome = prompt("Digite o nome da pessoa (ou 'fim' para sair):");

  if (nome === 'fim') {
    break; // Sai do loop se o nome for "fim"
  }

  // Solicita a idade da pessoa
  idade = parseInt(prompt(`Digite a idade de ${nome}:`));

  // Validação simples para garantir que a idade é um número válido
  if (!isNaN(idade)) {
    totalIdades += idade;
    contadorPessoas++;
  } else {
    alert("Idade inválida. Por favor, digite um número.");
  }

} while (nome !== 'fim'); // Continua o loop enquanto o nome não for "fim"

// Calcula e exibe a média das idades
if (contadorPessoas > 0) {
  const mediaIdades = totalIdades / contadorPessoas;
  document.write(`A média das idades é: ${mediaIdades.toFixed(2)}`);
 
} else {
  document.write("Nenhuma pessoa foi inserida para calcular a média.");
 
}

}
btnEx15.addEventListener('click', ex15)
