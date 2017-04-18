$(document).ready(function () {
    var imageInput = $('#file');
    var imageContainer = $('#imageContainer');
    //$('.alert-message').hide();
    $('#inputImageName').hide();
    //$('#filename').hide();

    function displayImage(file) {
        file = document.querySelector('input[type=file]').files[0];
        if (!file.type.toString().includes('image')) {
            $('input[type=file]').val("");
            //$('.alert-message').show();
            $('.alert-message').css('top', '100px');
            //alert("This file type is not supported. Try uploading an image.");
            return;
        }
        $('#filename').val(file.name);
        var image = $('<img/>').appendTo(imageContainer);
        //$('<div/>').addClass('progress').attr('rel', '0').text('0%').appendTo(imgCont);
        //imgCont.get(0).file = file;

        var reader = new FileReader();
        reader.onload = (function (aImg) {
            return function (e) {
                aImg.attr('src', e.target.result);
                aImg.attr('width', 150);
            };
        })(image);
        reader.readAsDataURL(file);
        $('#inputImageName').show();
    }

    imageInput.bind({
        change: function () {
            displayImage(this);
            var date = new Date();

            //$('#filename').show();
        }
    });

    $('.close-message').on('click', this, function () {
        $('.alert-message').css('top', '-40px');
    })

})