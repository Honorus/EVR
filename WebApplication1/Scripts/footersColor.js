

$(document).ready(function () {
    //document.getElementById('ft').style.color = document.getElementById('cl').value;
    $('#footer').change(function () {
        $(this).css('color', $('#inputColor').val());
    })
})