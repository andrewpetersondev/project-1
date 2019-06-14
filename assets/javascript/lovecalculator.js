// global variables
// ==========================================================================

// api key : 765b72b611msh83e1deab1282842p15aaf5jsn577be8027784

var username;
var strainName;
var fname;
var sname;






// functions
// ==========================================================================

function calculateMatch() {
    username = $("#username").val().trim();
    strainName = $("#strain-name").val().trim();
    var proxy = "https://cors-anywhere.herokuapp.com/";
    var queryURL = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${username}&sname=${strainName}`;
    console.log(queryURL);
    $.ajax({
        url: proxy + queryURL,
        headers: { "X-RapidAPI-Key": "765b72b611msh83e1deab1282842p15aaf5jsn577be8027784", "X-RapidAPI-Host": "love-calculator.p.rapidapi.com" },
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // $("#results").html()
    });
}




// main process
// ==========================================================================

// click button and receive data from api
// $("#love").on("click", function (event) {
//     event.preventDefault();
//     console.log('clicked');
//     var proxy = "https://cors-anywhere.herokuapp.com/";
//     var queryURL = "https://love-calculator.p.rapidapi.com/getPercentage?fname=John&sname=Alice";
//     $.ajax({
//         url: proxy + queryURL,
//         headers: { "X-RapidAPI-Key": "e0e5de8bf8msh31b01dba1b8405fp18c6fejsn08e5f81c5f7c", "X-RapidAPI-Host": "love-calculator.p.rapidapi.com" },
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//     });
// });

// click calculate match
$("#calculateBtn").on("click", function (event) {
    event.preventDefault();
    console.log('clicked');
    calculateMatch();
});


// psuedocode
// ==========================================================================
// 1. get the user name and store it in a variable
// 2. get the strain name and store it in a variable
// 3. insert username where fname is and strain name where sname is in query url
// 4. display results when calculate match is clicked