$(document).ready(function () {
    var imageInput = $('#file');
    var imageContainer = $('#imageContainer');
    $('#inputImageName').hide();
    //$('#filename').hide();

    function displayImage(file) {
        file = document.querySelector('input[type=file]').files[0];
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
    }

    imageInput.bind({
        change: function () {
            displayImage(this);
            $('#inputImageName').show();
            //$('#filename').show();
        }
    });

})