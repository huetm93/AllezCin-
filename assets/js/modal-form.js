
//let result = "Votre nom est : " + nom + "\n" + " Votre prenom : " + prenom + "\n" + " Votre numéro : " + tel + "\n" + " Votre e-mail : " + email + "\n" + " Votre texte : " + usertexte;
$( "#send-message").click( function() {
    let nom = $("#exampleInputEmail1").val();
    let tel = $("#exampleInputPassword1").val();
    let prenom = $("#exampleInputEmail2").val();
    let email = $("#exampleInputPassword2").val();
    let usertexte = $("#exampleFormControlTextarea1").val();
     $( "#modal-form" ).dialog({
        resizable: true,
        height: "auto",
        width: 600,
        modal: true,
        buttons: {
            "cancel": function(){
                $(this).dialog("close");
                $(this).addClass("btn-mod");
            }
        },
    
    });
    //$("#modal-form").text(result);
    $("#modal-form").text("Votre nom est : " + nom + "\n" + " Votre prenom : " + prenom + "\n" + " Votre numéro : " + tel + "\n" + " Votre e-mail : " + email + "\n" + " Votre texte : " + usertexte);
 });