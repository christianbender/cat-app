$("document").ready(function () {
    // image informations
    $.getJSON("ajax/data.json", function (data) {
        // contains the images sources
        var imageList = [];
        // for running over the images.
        var index = 0;
        // flag for controling the dia-show
        var runFlag = false;
        var duration = 5000;
        // pushes the urls into the array (above)
        $.each(data, function (key, val) {
            imageList.push(val);
        });
        // changes all times the image
        function changeImage() {
            if (runFlag) {
                if (index < imageList.length) {
                    $("#display-image").attr("src", imageList[index]);
                    index++;
                }
                else {
                    index = 0;
                    $("#display-image").attr("src", imageList[index]);
                }
            }
            console.log("duration=" + duration);
            duration = $("#duration").val();
            duration *= 1000;
            setTimeout(changeImage, duration);
        }
        $("#play-stop").click(function () {
            if (runFlag) {
                runFlag = false;
            }
            else {
                runFlag = true;
            }
        });
        setTimeout(changeImage, duration);
    });
});
