$(document).ready(function() {
    console.log("newsletter signup");
    var form = $('#newsletter');
    var name = "signup-user";
    email = $('#emailNL');
    var message = "Please add me to your mailing list";
    var company = "NA";
    var phone = "12345";
    var subject = "Newsletter Subscriber";
    submit = $("#submitNL");
    submit.on('click', function(e) {
        e.preventDefault();
        if(validate()) {
            $.ajax({
                type: "POST",
                url: "https://post.logzilla.net/mailer.php",
                data: form.serialize(),
                dataType: "json"
            }).done(function(data) {
                if(data.success) {
                    email.val('');
                    console.log("newsletter succeeded");
                } else {
                    console.log("newsletter failed");
                }
            });
        }
    });

    function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email.val())) {
            email.css('border-color', 'red');
            $("#emailNL").attr("placeholder", "ERROR: Please provide a valid email address").blur();
            valid = false;
        }
        return valid;
    }
});
