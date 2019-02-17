let arrow = document.createElement("i");
arrow.setAttribute("onclick", "scrollWin()");
arrow.setAttribute("id", "arrow");
arrow.setAttribute("class","rarrow ow fas fa-arrow-alt-circle-up fa-3x arrow float-right col-2");
let connect = document.getElementById("btnbot");
connect.appendChild(arrow);
 function scrollWin() {
  $("html,body").animate({scrollTop: 0},"slow");
}
 //https://contattafiles.s3.us-west-1.amazonaws.com/tnt14094/MaBi12Obb-RvtCg/arrow2.png//
 jQuery(function(){
    $(function () {
        $(window).scroll(function () { //Fonction appelée quand on descend la page
            if ($(this).scrollTop() > 1200 ) {  // Quand on est à 200pixels du haut de page,
                $('#arrow').css('right','10px'); // Replace à 10pixels de la droite l'image
            } else { 
                $('#arrow').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
            }
        });
    });
});
 //Modal Movies//
 $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#batman").modal();
    });
});
 $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#inception").modal();
    });
});
 $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#intouchable").modal();
    });
});
 $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#shutter").modal();
    });
});
 $(document).ready(function(){
    $("#myBtn").click(function(){
        $("#star").modal();
    });
}); 

// video shop movies //
$(document).ready(function(){
    
    var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
        $video = $('#carrousel>div'), // on cible les vidéos contenues dans le carrousel
        indexVideo = $video.length - 1, // on définit l'index du dernier élément
        i = 0, // on initialise un compteur
        $currentVideo = $video.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)
    
    $video.css('display', 'none'); // on cache les images
    $currentVideo.css('display', 'block'); // on affiche seulement l'image courante
    
    
    $('.next').click(function(){ // video suivante
    
        i++; // on incrémente le compteur
    
        if( i <= indexVideo ){
            $video.css('display', 'none'); // on cache les vidéos
            $currentVideo = $video.eq(i); // on définit la nouvelle vidéo
            $currentVideo.css('display', 'block'); // puis on l'affiche
        }
        else{
            i = indexVideo;
        }
    
    });
    
    $('.prev').click(function(){ // video précédente
    
        i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"
    
        if( i >= 0 ){
            $video.css('display', 'none');
            $currentVideo = $video.eq(i);
            $currentVideo.css('display', 'block');
        }
        else{
            i = 0;
        }
    
    });
    
    function slideVideo(){
                            
            if(i < indexVideo){ // si le compteur est inférieur au dernier index
            i++; // on l'incrémente
        }
        else{ // sinon, on le remet à 0 (première image)
            i = 0;
        }
    
        $video.css('display', 'none');
    
        $currentVideo = $video.eq(i);
        $currentVideo.css('display', 'block');
    
        slideVideo(); // on oublie pas de relancer la fonction à la fin
    }
    
    slideVideo(); // enfin, on lance la fonction une première fois
    
    });