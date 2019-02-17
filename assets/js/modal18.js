$( function() {
    
    $("main").css("opacity", "0.2");
    $( "#dialog-message" ).dialog({
        resizable: true,
        height: "auto",
        width: 600,
        opacity :1,
        modal: true,
        buttons: {
            "+ de 18": function() {
                $( this ).dialog( "close" );
                $("main").css("opacity", "1");
               
            },
            "- de 18": function() {  
                document.location.href="https://www.imdb.com/";
                
            }
        }
    });
});