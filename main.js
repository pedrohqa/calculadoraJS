//declaraçao de variavel
let operaçao = prompt("informa a operaçao desejada");
let numero1  = Number(prompt("informe o primeiro numero:"));
let numero2  = Number(prompt("informe o segundo numero:"));

//verificar a operaçao utilizada selecionada
if (operaçao == "+"){
    let resultado = numero1 + numero2;
    document.write("O resultado da soma é " + resultado + ".")
}
else if (operaçao == "-"){
    let resultado = numero1 - numero2;
    document.write("O resultado da subtração é " + resultado + ".")
}
else if (operaçao == "*"){
    let resultado = numero1 * numero2;
    document.write("O resultado da multiplicação é " + resultado + ".")
}
else if (operaçao == "/"){
    let resultado = numero1 / numero2;
    document.write("O resultado da divisão é " + resultado + ".")
}
else{ document.write("<h3>Erro <br> Digite Operação valida  +  -  *  /</h3>")
}