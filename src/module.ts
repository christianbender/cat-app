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
            // duration = <number><any>$("#duration").val();
            // duration *= 1000;
            setTimeout(changeImage, duration);
        }

        $("#play-stop").click(function () {
            counter++;
            if (runFlag) {
                runFlag = false;
                $("#play-stop").css("background-color", "red");
            } else {
                runFlag = true;
                $("#play-stop").css("background-color", "#1fa3c4");
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
            // setTimeout(changeImage, duration);
        });

        // next button. displays the next picture.
        $("#next-btn").click(function () {
            if (!runFlag) {
                if (index + 1 < imageList.length) {
                    index++;
                    $("#display-image").attr("src", imageList[index]);
                } else {
                    index = 0;
                    $("#display-image").attr("src", imageList[index]);
                }
            } else { // error, diashow must been stopped.
                alert("Diashow must been stopped before using the forward-button.");
            }
        })

    });
});


