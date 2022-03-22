
let numAleatorios = ["julio", "cesar", "valdir", "mesquita", "jooa"];

function gerar()
{
    let qntNumBase = numAleatorios.length;
    let numSorteado = Math.floor(Math.random()*qntNumBase);

    document.getElementById('num').innerHTML = numAleatorios[numSorteado];
};