$(function() {
    $( ".img-fullscreen" ).wrap( "<a href='#' class='pop'></a>" );
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});
