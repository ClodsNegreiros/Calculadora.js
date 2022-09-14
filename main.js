const insert = (number) => {
    let numero = document.getElementById('calcs').innerHTML;
    document.getElementById('calcs').innerHTML = numero + number;
}

const clean = () => 
    document.getElementById('calcs').innerHTML = '';


const calcular = ()  => {
    let numero = document.getElementById('calcs').innerHTML;

    if(calcs) {
        document.getElementById('calcs').innerHTML = eval(numero)
    }
        
}

const percentage = () => {
    let numero = document.getElementById('calcs').innerHTML;
    if(percentage) {
        document.getElementById('calcs').innerHTML = numero / 100
    }
}

const back = () => {
    let resultado = document.getElementById('calcs').innerHTML;
    document.getElementById('calcs').innerHTML = resultado.substring(0, resultado.length-1)
}