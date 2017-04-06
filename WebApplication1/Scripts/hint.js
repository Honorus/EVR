//$(function () {
//    document.getElementById('ft').style.color = document.getElementById('cl').style.color;
//});

$(document).ready(function () {
    //document.getElementById('ft').style.color = document.getElementById('cl').value;
    $('#ft').change(function () {
        $(this).css('color', $('#cl').val());
    })
})