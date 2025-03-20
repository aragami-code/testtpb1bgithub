
function valide() {
     marque = document.getElementById("marque").value;
     quantite = document.getElementById("quantite").value;
     prixUnitaire = document.getElementById("prixUnitaire").value;

    if (marque === "" || quantite === "" || prixUnitaire === "" || quantite <= 0 || prixUnitaire <= 0) {
        document.getElementById("resultat").innerHTML = "Remplissez Tous les champs.";
        document.getElementById("resultat").style.color = "red";
        return;
    }

     prixTotal = quantite * prixUnitaire;
    document.getElementById("resultat").innerHTML = `Vos ${quantite} ${marque} coutent ${prixTotal.toLocaleString()} FCFA.`;
    document.getElementById("resultat").style.color = "green";
}

