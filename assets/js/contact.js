$(document).ready(function() {
    // Download Form
    $("#gform").validate();
    $('#gform-installGuide').hide();
    var pathname = window.location.pathname;
    var submitted=false;
    $('#gform').on('submit', function(e) {
        var name = $('#name').val();
        var fname = name.split(' ');
        var email = $('#email').val();
        var company = $('#company').val();
        var phone = $('#phone').val();
        var message = $('#message').val();
        $('#gform').toggle( "explode" );
        if (pathname == "/contact.html") {
            // contact page
            $('#contact-us-title').html('<br /><br /><br />Thank you <span class="highlight">' + fname[0] + '!</span><br />!');
            $('#contact-us-subheading').html('We have received your message and will reach out shortly.');
        } else {
            $('#gform-results').html('<br /><br /><br />Way to go <span class="highlight">' + fname[0] + '!</span><br />!');
            $('#gform-results-sub').html('Get ready to be the most well-liked person in your company!');
        }
        $('#gform-installGuide').toggle( "puff" );
    });
});
