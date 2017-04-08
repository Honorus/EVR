/*

alert("???");

*/

$(document).ready(function () {

    $("#Description").on('click', ".spoiler .title", function () {
        $(this).toggleClass("active");
        $(this).parent().find(".big-desc").toggle(500);
    });
});