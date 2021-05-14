$(function() {

    $("a").click(function(event) {
        
        if (this.hash !== "") {
            event.preventDefault();
                var gato = this.hash;

            $('html, body').animate({
                scrollTop: $(gato).offset().top
                }, 800, function(){
                
                window.location.hash = gato;
            });

        }
    });


    $("p").click(function() {
        $("a").hide("fast");
        });

    $("p").click(function() {
        $("a").show("fast");
        });
                
    });
});
