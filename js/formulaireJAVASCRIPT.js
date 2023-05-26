$(document).ready(function () {


    $('input[type=Submit]').click(function() {
        
            let valeurOptionsRadio = false;
    
            if($('input[value=email]').is(":checked") || $('input[value=poste]').is(":checked")){
                alert('Méthde choisie');
                valeurOptionsRadio = true;
            }
    
            else if(!$('input[value=email]').is(":checked") || !$('input[value=poste]').is(":checked")){
                alert('Vous devez sélectionner au moins une méthode de réception');
                valeurOptionsRadio = false;
            }
    
    });


    function validationComplete(){
        
        if(valeurOptionsRadio == true){
            return true;
        }else{
            return false;
        }
    }



});
