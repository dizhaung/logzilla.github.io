$(function() {
    $('.emailtrans').each(function() {
        var text = $(this).text().replace(/nospam/g, 'logzilla');
        var href = $(this).attr('href').replace(/nospam/g, 'logzilla');
        $(this).html(text);
        $(this).attr('href', href);
    });
});
