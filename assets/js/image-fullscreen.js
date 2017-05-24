$(function() {
    $( ".img-fullscreen" ).wrap( "<a href='#' class='pop' style='cursor: -moz-zoom-in; cursor: -webkit-zoom-in; cursor: zoom-in'></a>" );
    $('.pop').on('click', function() {
        $('.imagepreview').attr('src', $(this).find('img').attr('src'));
        $('#imagemodal').modal('show');
    });
});
