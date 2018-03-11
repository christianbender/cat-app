$("document").ready(function () {

    // image informations
    $.getJSON("ajax/data.json", function (data) {

        // contains the images sources
        var imageList = [];

        // for running over the images.
        var index = 1;

        // flag for controling the dia-show
        var runFlag: boolean = false;

        // duration of the displaying picture.
        var duration: number = 5000;

        // for recognizing the first click on the play/start button.
        var counter: number = 0;

        // pushes the urls into the array (above)
        $.each(data, function (key, val) {
            imageList.push(val);
        });

        // changes all times the image
        function changeImage(): void {
            if (runFlag) {
                console.log(index); //DEBUG
                if (index < imageList.length) {
                    $("#display-image").attr("src", imageList[index]);
                    index++;
                } else {
                    index = 0;
                    $("#display-image").attr("src", imageList[index]);
                    index++;
                }
                
            }
            duration = <number><any>$("#duration").val();
            duration *= 1000;
            setTimeout(changeImage, duration);
        }

        $("#play-stop").click(function () {
            counter++;
            if (runFlag) {
                runFlag = false;
            } else {
                runFlag = true;
            }

            // for the first-time click on play/start-button
            if (counter == 1) {
                duration = <number><any>$("#duration").val();
                duration *= 1000;
                setTimeout(changeImage, duration);
            }
        });

        // for changing the duration.
        $("#duration").change(function () {
            duration = <number><any>$("#duration").val();
            duration *= 1000;
            setTimeout(changeImage, duration);
        });

    });
});


