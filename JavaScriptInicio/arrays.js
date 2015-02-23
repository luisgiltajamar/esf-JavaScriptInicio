var datos=[];

function add() {
    var tx = document.querySelector("#txtNombre").value;

    datos.push(tx);

    document.querySelector("#txtNombre").value = "";

}
function listar() {
    
    var res = document.querySelector("#resultado");
    res.innerHTML = "";
    for (var i = 0; i < datos.length; i++) {
        res.innerHTML += datos[i] + "<br>";
    }
}
(function () {
    
    var btnAdd = document.querySelector("#btnAdd");
    var btnListar = document.querySelector("#btnListar");

    btnAdd.addEventListener("click", add);
    btnListar.addEventListener("click", listar);

})();
