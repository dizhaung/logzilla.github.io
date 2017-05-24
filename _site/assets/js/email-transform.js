$(function() {
    $('a').each(function() {
        var text = $(this).text().replace(/nospam/g, 'logzilla');
        $(this).html(text);
    });
});
