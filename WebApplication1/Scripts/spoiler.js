/*

alert("???");

*/

$(document).ready(function () {

    $("#Description").on('click', ".spoiler .spoiler-title", function () {
        $(this).toggleClass("active");
        $(this).parent().find(".spoiler-container").toggle(500);
    });
});