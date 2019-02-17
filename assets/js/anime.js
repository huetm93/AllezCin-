$(document).ready(function(){
    $(".btnAll").click(function(){
        $(".slidePolicier").fadeToggle('slow'); 
        $(".slideAction").fadeToggle("slow");   
    });
    $(".btnAction").click(function(){   
        $(".slideAction").fadeToggle("slow");    
    });
    $(".btnPolicier").click(function(){   
        $(".slidePolicier").fadeToggle("slow");    
    });

    $('.slidePolicier2').hide();
    $(".slideAction2").hide();

    $(".btnPlus").click(function(){
       $(".slidePolicier2").fadeToggle("slow");
        $(".slideAction2").fadeToggle("slow");
       $(".btnPlus").text("Moins de films");
    });
    // series
    $(".btnAll3").click(function(){
        $(".slidePolicier3").fadeToggle('slow'); 
        $(".slideAction3").fadeToggle("slow");   
    });
    $(".btnAction3").click(function(){   
        $(".slideAction3").fadeToggle("slow");    
    });
    $(".btnPolicier3").click(function(){   
        $(".slidePolicier3").fadeToggle("slow");    
    });

    $(".slidePolicier4").hide();
    $(".slideAction4").hide();
    
    $(".btnPlus4").click(function(){   
        $(".slidePolicier4").fadeToggle("slow");
        $(".slideAction4").fadeToggle("slow");
        $(".btnPlus4").text("Moins de series");
    });
});