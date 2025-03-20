function calcul(){
    var a = document.getElementById("l1").value;
    a= parseInt(a)
    var b = document.getElementById("l2").value;
    b= parseFloat(b)
    var c = a*b;
    document.getElementById("l3").value=c;
    alert("Vos" +a+ " sacs, coutent" +c+ "fcfa");
} 
