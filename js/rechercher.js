function rechercher(){
    var recherche = document.getElementById("bouttonRecherche").value;
    window.location.hash = '';
    window.location.hash = recherche;
}
