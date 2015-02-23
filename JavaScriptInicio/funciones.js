var n = 22;


function calcularNumero() {
   var  nn = 3;
   alert(n * nn);

   while (nn < 10) {
        nn++;
       if (nn % 5 == 0) {
           document.write("Fin del while");
           continue;
       }
       document.write(nn);
     
   }
   do {
       document.write("Soy do ");
       document.write(nn);
       nn++;
   }while(nn<10);


  // for(nn=3;nn<10;nn++)


}
function incrementarNumero() {
    n += 12;
   // n = n + 12;
}
function valorNn() {
    alert(nn);

}

(function () {
    incrementarNumero();
    var bt=document.getElementById("miBoton");
    bt.addEventListener("click", calcularNumero);
   // alert(nn);
})();