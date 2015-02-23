
function sumar() {

    var n1 = document.querySelector("#txtOp1");
    var n2 = document.querySelector("#txtOp2");

    if (!isNaN(n1.value) && !isNaN(n2.value)) {

        var capa = document.querySelector("#resultado");
        var r = parseInt(n1.value) + parseInt(n2.value);
        capa.innerHTML = "La suma es " + r;

    }
    else {
        alert("Solo se pueden sumar numeros");

    }

}
function restar() {

    var n1 = document.querySelector("#txtOp1");
    var n2 = document.querySelector("#txtOp2");

    if (!isNaN(n1.value) && !isNaN(n2.value)) {

        var capa = document.querySelector("#resultado");
        var r = parseInt(n1.value) - parseInt(n2.value);
        capa.innerHTML = "La resta es " + r;

    }
    else {
        alert("Solo se pueden sumar numeros");

    }

}

(function () {
    
    var btMas = document.querySelector("#btnMas");
    var btMenos = document.querySelector("#btnMenos");

    btMas.addEventListener("click", sumar);
    btMenos.addEventListener("click", restar);

})();