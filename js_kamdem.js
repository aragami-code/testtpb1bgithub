

//ici ce code resoud une équation de 2nd degré//
function équationdegré2(){

    //rappel sur la procédure de resolution de l'equation du second degré//
    alert("L'equation du second dégré est sous la forme ax²+bx+c=0 avec a different de zero.\n Exemple:f(x)=2x²+5x+1");
    
    //déclaration des variables tels que a,b et c qui sont des réels //
    var a,b,c,d;
     a = Number(prompt("Entrez la valeur de a: "));
     b = Number(prompt("Entrez la valeur de b: "));
     c = Number(prompt("Entrez la valeur de c: "));
     d = b * b - 4 * a * c;//discriminant//
    
    //boucle if...//
    if(a&&b&&c!=0){ 
    //affichage de l'équation//
    alert("Donc votre equation est f(x)="+a+"x²+"+b+"x+"+c+",appuyé OK sur pour connaitre le resultat");
     }
    if(a&&c<0 || a&&c>0 && b==0){ 
    alert("Donc votre equation est f(x)="+a+"x²+"+c+",appuyé OK sur pour connaitre le resultat");
     }if(a&&b<0 || a&&b>0 && c==0){ 
    alert("Donc votre equation est f(x)="+a+"x²+"+b+"x,appuyé OK sur pour connaitre le resultat");
     }
    
    var x0,x1,x2;//variable des solutions//
    
    //teste la valeur du discrimiant enfin de determiner les solutions ou pas// 
    if (d > 0) {
        //math.srqt est une fonction racine carré//
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        alert("Comme ∆(discriminant) = " + d + " > 0, alors l'equation f(x) admet deux solution qui sont x1 = " + x1 + " et x2= " + x2);
    }
    else if(d<0){
        alert("Comme ∆(discriminant) = " + d + " < 0, alors l'equation f(x) admet aucune solution donc l'ensemble vide (S=∅)");
    }
    else if(d==0,a&&b&&c!=0){
      x0= -b / (2 * a); 
        alert("Comme ∆(discriminant) = " + d + " ,alors l'équation f(x) admet une seule solution qui est x0= " + x0);
    }else{
    alert("Verifié vos information");
    }
     }
     //ici ce code resoud une équation de 1er degré//
      function équationdegré1(){         
    var a,b,x1,x2;//variable//
    alert("l équation de degré 1 est sous la forme ax+b= 0 avec a différentes de 0 \n exemple:f(x)=2x-4");
     a = Number(prompt("Entrez la valeur de a"));
     b = Number(prompt("Entrer la valeur de b"));
     x1= -b/a;
     x2=  b/a;
    
    if(a&&b!=0){
    alert("Donc votre équation est f(x)="+a+"x+"+b);
    }
    //test de a et b//
    if(a<0,b<0){ 
    alert("la solution de votre equation f(x) est x= " +x1);
     }else if(a>0,b>0){
    alert("la solution de votre equation f(x) est x= " +x1);
     }else if(a>0,b<0){
    alert("la solution de votre equation f(x) est x= " +x2);
    }else if(a<0,b>0){
    alert("la solution de votre equation f(x) est x= "  +x2);
    }else{
    alert("verifié vos informations");
    }
    }
    
    //somme de deux nombres//
       function addittion(){
      var nbre1,nbre2,somme,result;
       nbre1=document.getElementById("nbre1").value;
       nbre2=document.getElementById("nbre2").value;
       //if...else//
       if(somme=parseInt(nbre1)+parseInt(nbre2)){
       documentd.getElementByI("result").innerHTML=nbre1+ " (+) " +nbre2+ " = " +somme;
       }else{
       alert("Veuillez verifié la saisie");
    }
     }
    //soustration de deux nombres//
    function soustration(){
      var nbre1,nbre2,soustraire,result;
       nbre1=document.getElementById("nbre1").value;
       nbre2=document.getElementById("nbre2").value;
       //if...else//
       if(soustraire=parseInt(nbre1)-parseInt(nbre2)){
       document.getElementById("result").innerHTML=nbre1+ " (-) " +nbre2+ " = " +soustraire;
       }
     }
    //multiplication de deux nombres//
    function multiplication(){
      var nbre1,nbre2,produit,result;
       nbre1=document.getElementById("nbre1").value;
       nbre2=document.getElementById("nbre2").value;
       //if...else//
       if(produit=parseInt(nbre1)*parseInt(nbre2)){
       document.getElementById("result").innerHTML=nbre1+ " (* )" +nbre2+ " = " +produit;
       }else{
       alert("Veuillez verifié la saisie");
    }
     }
    //division de deux nombres//
    function division(){
       var nbre1,nbre2,divise,result;
       nbre1=document.getElementById("nbre1").value;
       nbre2=document.getElementById("nbre2").value;
       //if...else//
       if(divise=parseInt(nbre1)/parseInt(nbre2)){
       document.getElementById("result").innerHTML=nbre1+ " (/) " +nbre2+ " = " +divise;
       }else{
       alert("Veuillez verifié la saisie");
    }
     }
     
    //comparé deux nombres//
    function compare(){
    var nbre1,nbre2,result;
     nbre1=document.getElementById("nbre1").value;
     nbre2=document.getElementById("nbre2").value;
    //if...//
    if(nbre1>nbre2){
    document.getElementById("result").innerHTML=nbre1+ " est plus grand que " +nbre2;
       }
    else if(nbre1<nbre2){
    document.getElementById("result").innerHTML=nbre1+ " est plus petit que " +nbre2;
    }
    else if(nbre1==nbre2 && nbre1!=0 && nbre2!=0){
    document.getElementById("result").innerHTML=nbre1+ " est égale " +nbre2;
    }else if(nbre1==0 && nbre2==0){
    alert("veuillez verifié la saisie");
    }else if(nbre1==0 && nbre2!=0){
       alert("vous devez saisie deux nombres dans les champs vides")
    }else if(nbre2==0 && nbre1!=0){
       alert("vous devez saisie deux nombres dans les champs vides")
    }
     }
     function cosinus(){
       var nbre1,nbre2,cos,somme,result;
       nbre1=document.getElementById("nbre1").value;
       nbre2=document.getElementById("nbre2").value;
       //if...else//
       if(cos=Math.cos(parseInt(nbre1)+parseInt(nbre2))){
          somme=parseInt(nbre1)+parseInt(nbre2)
          document.getElementById("result").innerHTML="le consinus de "+somme+" est "+cos;
       }
       else if(cos=Math.cos(parseInt(nbre1)-parseInt(nbre2))){
          document.getElementById("result").innerHTML= cos;
          }
          else if(cos=Math.cos(parseInt(nbre1)*parseInt(nbre2))){
             document.getElementById("result").innerHTML= cos;
             }
             else if(cos=Math.cos(parseInt(nbre1)/parseInt(nbre2))){
                document.getElementById("result").innerHTML= cos;
                }else{
       alert("Veuillez verifié la saisie");
    }
    }
    function sinus(){
       var nbre1,nbre2,sin,result;
       nbre1=document.getElementById("nbre1").value;
       nbre2=document.getElementById("nbre2").value;
       //if...else//
       if(sin=Math.sin(parseInt(nbre1)+parseInt(nbre2))){
       document.getElementById("result").innerHTML= sin;
       }
       else if(sin=Math.sin(parseInt(nbre1)-parseInt(nbre2))){
          document.getElementById("result").innerHTML= sin;
          }
          else if(sin=Math.sin(parseInt(nbre1)*parseInt(nbre2))){
             document.getElementById("result").innerHTML= sin;
             }
             else if(sin=Math.sin(parseInt(nbre1)/parseInt(nbre2))){
                document.getElementById("result").innerHTML= sin;
                }else{
       alert("Veuillez verifié la saisie");
    }
     }
    
    