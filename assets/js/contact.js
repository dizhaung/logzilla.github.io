$(document).ready(function() {
    $('#download-instructions-container').hide();
    var form = $('#contact-form'),
    name = $('#name'),
    email = $('#email'),
    message = $('#message'),
    company = $('#company'),
    phone = $('#phone'),
    subject = $('#subject');
    submit = $("#submit");

    form.on('input', '#name, #email, #message, #company, #phone, #subject', function() {
        $(this).css('border-color', '');
        //$('#contact-form-results').html('').slideUp();
    });

 

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
                    $('#contact-form').hide();
                    $('#contact-form-results').html('<br /><br /><br />Hooray For <span class="highlight">' + name.val() + '!</span><br /> You Did it!');
                    $('#contact-form-results-sub').html('Get ready to be the most well-liked person in your company!');
                    $('#download-instructions-container').show();
                    // console.log("sent");
                    console.log(data);
                } else {
                    $('#contact-form').hide();
                    $('#contact-form-results').html('<span class="highlight"><br /><br /><br />Oh Noes!</span> Something went sideways and the mail didn\'t send.');
                    $('#contact-form-results-sub').html('But fear not, we use LogZilla and already know about it. <br />You can email us directly at sales@logzilla.net for some extra-special treatment :)');
                    // console.log("failed");
                    console.log(data);
                }
            });
        }
    });

    function validate() {
        var valid = true;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var phone_regex = /[a-z]/i;

        if(!regex.test(email.val())) {
            email.css('border-color', 'red');
            $("#email").attr("placeholder", "ERROR: Please provide a valid email address").blur();
            valid = false;
        }
        /*if($.trim(message.val()) === "") {
            message.css('border-color', 'red');
            $("#message").attr("placeholder", "ERROR: Please tell us how we can help, for example:\nI want to learn how to save time, money, and headaches by making my network to run like a well-oiled machine").blur();
            valid = false;
        }
        */
        if($.trim(company.val()) === "") {
            company.css('border-color', 'red');
            $("#company").attr("placeholder", "ERROR: Please provide a Company Name").blur();
            valid = false;
        }
        if(phone_regex.test(phone.val())) {
            phone.css('border-color', 'red');
            $('#phone').val('');
            $("#phone").attr("placeholder", "ERROR: Please provide a valid phone number").blur();
            valid = false;
        }
        if($.trim(name.val()) === "") {
            name.css('border-color', 'red');
            $("#name").attr("placeholder", "ERROR: Type a name (Firstname Lastname)").blur();
            valid = false;
        }

        return valid;
    }

});
