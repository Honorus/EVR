$(document).ready(function () {
    $("#Gallery").on('click', '.close', function () {
        //var image = $(this).parent().parent().attr('img');
        //$.get($(this).parent().parent(), "img", function(im){
        //    var img = im;
        $(this).parent().parent();
        var i = $(this);
        //})

    })

    function del(src_image)
    {
        $.ajax({
            url: '/Home/DeleteImage'
        })
    }
})