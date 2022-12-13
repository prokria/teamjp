function ValidateEmail(mail) {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

function validateFormdata(email, fullname, message){

    if(email == ''){
        $('#userEmail').css('border-color', 'red');
        $('#varifyEmailText').text('This field must contain a valid Email');
        $('#varifyEmailText').css('opacity', '1');
    } else if(email.length && !ValidateEmail(email)){

        $('#userEmail').css('border-color', 'red');
        $('#varifyEmailText').text('Invalid Email');
        $('#varifyEmailText').css('opacity', '1');

    } else {
        $('#userEmail').css('border-color', '#000');
        $('#varifyEmailText').css('opacity', '0');
    }

    if(fullname == ''){
        $('#userName').css('border-color', 'red');
        $('#varifyNameText').css('opacity', '1');
    } else {
        $('#userName').css('border-color', '#000');
        $('#varifyNameText').css('opacity', '0');
    }

    if(message == ''){
        $('#userMessage').css('border-color', 'red');
        $('#varifyMessageText').css('opacity', '1');
    } else {
        $('#userMessage').css('border-color', '#000');
        $('#varifyMessageText').css('opacity', '0');
    }

    if(email.length && fullname.length && message.length && ValidateEmail(email)){
        return true;
    } else {
        return false;
    }

}

function toastMsg(success, data){
    if(success == true){

        $(".toast_icon i").removeAttr('class');
        $(".toast_icon i").addClass('bx bx-check-circle');
        $('.toast_msg').text(data);
        $(".toast_msg_box").removeAttr('style');
        $('.toast_msg_box').css('background-color', '#4BB543');

        $('.toast_msg_box').addClass('active_toast_box');
    } else {
        $(".toast_icon i").removeAttr('class');
        $(".toast_icon i").addClass('bx bx-error-circle');
        $('.toast_msg').text(data);
        $(".toast_msg_box").removeAttr('style');
        $('.toast_msg_box').css('background-color', 'red');

        $('.toast_msg_box').addClass('active_toast_box');
    }

    setTimeout(()=>{
        $('.toast_msg_box').removeClass('active_toast_box');
    },3000);
}

$( document ).ready(() => {

    $('#userEmail').change(()=>{
        let value = $('#userEmail').val();
    
        if(value == ''){
            $('#userEmail').css('border-color', 'red');
            $('#varifyEmailText').css('opacity', '1');
        } else {
            $('#userEmail').css('border-color', '#000');
            $('#varifyEmailText').css('opacity', '0');
        }
    });
    
    $('#userName').change(()=>{
        let value = $('#userName').val();
    
        if(value == ''){
            $('#userName').css('border-color', 'red');
            $('#varifyNameText').css('opacity', '1');
        } else {
            $('#userName').css('border-color', '#000');
            $('#varifyNameText').css('opacity', '0');
        }
    });
    
    $('#userMessage').change(()=>{
        let value = $('#userMessage').val();
    
        if(value == ''){
            $('#userMessage').css('border-color', 'red');
            $('#varifyMessageText').css('opacity', '1');
        } else {
            $('#userMessage').css('border-color', '#000');
            $('#varifyMessageText').css('opacity', '0');
        }
    });



    $("#formSubmit").click(()=>{

        let email = $('#userEmail').val();
        let fullname = $('#userName').val();
        let message = $('#userMessage').val();

        if(validateFormdata(email, fullname, message)){
            $("#formSubmit").attr("disabled", "disabled");

            const formData = new FormData();
            formData.append("email", email);
            formData.append("fullname", fullname);
            formData.append("message", message);

            $.ajax({
                method: 'post',
                processData: false,
                contentType: false,
                cache: false,
                data: formData,
                enctype: 'multipart/form-data',
                url: 'https://arwa.info/teamjp/contact.php',
                success: function (response) {
                    toastMsg(response.success, response.data);

                    $("#formSubmit").removeAttr("disabled");
                    $('#userEmail').val('');
                    $('#userName').val('');
                    $('#userMessage').val('');
                },
                error: function(){
                    $("#formSubmit").removeAttr("disabled");

                    $(".toast_icon i").removeAttr('class');
                    $(".toast_icon i").addClass('bx bxs-x-circle');
                    $('.toast_msg').text('error');
                    $(".toast_msg_box").removeAttr('style');
                    $('.toast_msg_box').css('background-color', 'red');

                    $('.toast_msg_box').addClass('active_toast_box');

                    setTimeout(()=>{
                        $('.toast_msg_box').removeClass('active_toast_box');
                    },3000);
                }
            });

        }
    });

});








