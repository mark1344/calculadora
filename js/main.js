var operandoa ;
var operandob ;
var operacion ;


function calculadora(){

    var resultado = document.getElementById("resultado");
    var uno = document.getElementById("uno");
    var dos = document.getElementById("dos");
    var tres = document.getElementById("tres");
    var cuatro = document.getElementById("cuatro");
    var cinco = document.getElementById("cinco");
    var seis = document.getElementById("seis");
    var siete = document.getElementById("siete");
    var ocho = document.getElementById("ocho");
    var nueve = document.getElementById("nueve");
    var cero = document.getElementById("cero");
    var dividir = document.getElementById("dividir");
    var multiplicar = document.getElementById("multiplicar");
    var resta = document.getElementById("restar");
    var suma = document.getElementById("sumar");
    var clear = document.getElementById("clear");
    var igual = document.getElementById("igual");

    uno.onclick = function(e){
       resultado.textContent = resultado.textContent + "1";
    }
    dos.onclick = function(e){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(e){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(e){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(e){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(e){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(e){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(e){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(e){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(e){
        resultado.textContent = resultado.textContent + "0";
    }


    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-"
        limpiar();
    }
    multiplicar.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*"
        limpiar();
    }
    dividir.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/"
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
    function resolver(){
        var solucion = 0;
        switch(operacion){
            case"+":
                solucion = parseFloat(operandoa) + parseFloat(operandob);
                break;
            case "-" :
                solucion = parseFloat(operandoa) - parseFloat(operandob);
                break;
            case "*" :
                solucion = parseFloat(operandoa) * parseFloat(operandob);
                break;
            case "/" :
                solucion = parseFloat(operandoa) / parseFloat(operandob);
                break;
        }
        resultado.textContent = solucion;

    }

    function limpiar(){
        resultado.textContent ="";
    }
    clear.onclick = function(e){
        limpiar()
    }
}
