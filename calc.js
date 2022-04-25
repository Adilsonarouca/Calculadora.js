function insert (num)
{
    let numero = document.getElementById('resultado').innerHTML ;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean (){
    document.getElementById('resultado').innerHTML = "";
}

function back (){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1)

}
 /*Está funções faz os calculos da impressora*/
function calcular (){
    let resultado = document.getElementById('resultado').innerHTML;
    if (resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
  /*Está funções muda a cor da calculadora, após clicar no botões*/
function clicar (){
    var element = document.getElementById("calculadora");
    element.style.backgroundColor='#ec5fae';


}
function clicarr (){
    var element = document.getElementById("calculadora");
    element.style.backgroundColor='#005de5';
}
function clicarrr(){
    var element = document.getElementById("calculadora");
    element.style.backgroundColor='#c80212';
}
function clicarrrr(){
    var element = document.getElementById("calculadora");
    element.style.backgroundColor='#150002';

}

function clicarrrrr(){
    var element = document.getElementById("calculadora");
    element.style.backgroundColor='#4B0082';
  
}

