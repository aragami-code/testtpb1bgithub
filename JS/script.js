function bonjour(){
alert("bonjour")
}
function add(){
    var a = document.getElementById("m1").value;
    a = parseInt(a)
    var b = document.getElementById("m2").value;
    b = parseInt(b)
    var c = a+b;
    document.getElementById('y1').value = c
}

function mult(){
        var a = document.getElementById("m3").value;
        a = parseInt(a)
        var b = document.getElementById("m4").value;
        b = parseInt(b)
        var c = a*b;
        document.getElementById('y2').value = c
    }

   
function sous(){
    var a = document.getElementById("m5").value;    
    a = parseInt(a)
    var b = document.getElementById("m6").value;
    b = parseInt(b)
    var c = a-b;
    document.getElementById('y3').value = c
 }
    function calculette() {
        var a = parseFloat(document.getElementById("c1").value);
        var b = parseFloat(document.getElementById("c2").value);
        var op = document.getElementById("operation").value;
        var result = "";

        if (isNaN(a) || isNaN(b)) {
            result = "Veuillez entrer deux nombres valides.";
        } else {
            if (op == "add") {
                result = a + b;
            } else if (op == "mult") {
                result = a * b;
            } else if (op == "sous") {
                result = a - b;
            } else {
                result = "Veuillez choisir une opération.";
            }
        }

        document.getElementById("resCalc").value = result;
    }

    function resetCalc() {
        document.getElementById("c1").value;
        document.getElementById("c2").value;
        document.getElementById("operation").value;
        document.getElementById("resCalc").value;
    }

    function convertirManuel() {
        const montant = parseFloat(document.getElementById("montantManuel").value);
        const deviseDe = document.getElementById("deviseDeManuel").value;
        const deviseVers = document.getElementById("deviseVersManuel").value;
    
        // Taux de change manuels (exemples arbitraires)
        const tauxChange = {
            EUR: { USD: 1.1, XOF: 655.957, GBP: 0.85, JPY: 130 },
            USD: { EUR: 0.91, XOF: 600, GBP: 0.77, JPY: 118 },
            XOF: { EUR: 0.0015, USD: 0.0017, GBP: 0.0013, JPY: 0.2 },
            GBP: { EUR: 1.17, USD: 1.3, XOF: 775, JPY: 150 },
            JPY: { EUR: 0.0077, USD: 0.0085, XOF: 5, GBP: 0.0067 }
        };
    
        if (deviseDe === deviseVers) {
            document.getElementById("resultatManuel").value = montant.toFixed(2) + " " + deviseVers;
            return;
        }
    
        if (tauxChange[deviseDe] && tauxChange[deviseDe][deviseVers]) {
            const taux = tauxChange[deviseDe][deviseVers];
            const resultat = montant * taux;
            document.getElementById("resultatManuel").value = resultat.toFixed(2) + " " + deviseVers;
        } else {
            document.getElementById("resultatManuel").value = "Taux non défini";
        }
    }
    

