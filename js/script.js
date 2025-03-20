function calcul() {
    var nom = document.getElementById("inp1").value;
    var a = document.getElementById("s1").value 
    a = parseInt(a)
    var b = document.getElementById("s2").value 
    b = parseFloat(b)
    var c = a*b
    document.getElementById("s3").value="vos"  +a+""+nom+", coutent" +c+ "fcfa";
    alert("vos"  +a+""+nom+", coutent" +c+ "fcfa");
    c=document.getElementById("c").value="vos"  +a+""+nom+", coutent" +c+ "fcfa";

}
