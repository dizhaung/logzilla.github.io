$(document).ready(function() {
    var form = $('#signup-form');
    name = "signup-user";
    email = $('#nl-email');
    message = "Please add me to your mailing list";
    company = "";
    phone = "";
    subject = "Newsletter Subscriber";
    submit = $("#submit-nl");
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
                    subject.val('');
                    message.val('');
                    company.val('');
                    phone.val('');
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
            $("#email").attr("placeholder", "ERROR: Please provide a valid email address").blur();
            valid = false;
        }
        return valid;
    }

});
