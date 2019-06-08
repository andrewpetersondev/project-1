// api key : m7th4nl

// click button and receive data from api
$("#strain-api-test").on("click", function () {

    var queryURL = "https://strainapi.evanbusse.com/m7th4nl";

    $.ajax({

        url: queryURL,
        method: "GET"

    }).then(function (response) {

        console.log(response);

    })

});

$("#strain-api-parameter-test").on("click", function () {

    var allStrains = "strains/search/all";

    var queryURL = "https://strainapi.evanbusse.com/m7th4nl/" + allStrains;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    })

});