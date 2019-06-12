// api key : 765b72b611msh83e1deab1282842p15aaf5jsn577be8027784

// click button and receive data from api
$("#love").on("click", function (event) {
event.preventDefault();

console.log('clicked');

var proxy = "https://cors-anywhere.herokuapp.com/";

    var queryURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice";

    $.ajax({


        url: proxy+queryURL,
        headers: { "X-RapidAPI-Key": "e0e5de8bf8msh31b01dba1b8405fp18c6fejsn08e5f81c5f7c", "X-RapidAPI-Host": "love-calculator.p.rapidapi.com" },
        method: "GET"


    }).then(function (response) {

        console.log(response);

    })

});
