$( document ).ready(function() {
    $('.img-fullscreen' ).each(function( index ) {
        src = $(this).attr("src");
        // console.log( index + ": " + $( this ).text() );
        // console.log("image source = " + src);
        if(!$(this).hasClass("img-fluid")){
            $(this).addClass("img-fluid");
        }
        $(this).before('<!-- Start: Image fullscreen -->\n');
        $(this).wrap('<a href="' + src + '" data-toggle="lightbox"></a>');
        $(this).append("<!-- End: Image fullscreen -->\n");
    });
    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox({alwaysShowClose: true});
    });
});
