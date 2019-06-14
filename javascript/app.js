// api key : m7th4nl

// click button and receive data from api
// $("#strain-api-test").on("click", function () {

//     var queryURL = "https://strainapi.evanbusse.com/m7th4nl";

//     $.ajax({

//         url: queryURL,
//         method: "GET"

//     }).then(function (response) {

//         console.log(response);

//     })

// });

// $("#strain-api-parameter-test").on("click", function () {

//     var allStrains = "strains/search/all";

//     var queryURL = "https://strainapi.evanbusse.com/m7th4nl/" + allStrains;

//     console.log(queryURL);

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(response);
//     })

// });

//everything above this line is the original app.js -- code below line are emma's updates from 6/13/19 9pm

// The below code fills in the first row of the table 
var queryURL = "http://strainapi.evanbusse.com/cpTeJEf/strains/search/all";
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    // console.log(response)

    for (var i = 0; i < 6; i++) {
        var strainID = Math.ceil(Math.random() * 2161) + 1;

        for (key in response) {

            // console.log("loop: ", response[key])

            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text

            var tr = $("<tr>");
            var name = $("<td scope='col'>").text(key);
            var id = $("<td scope='col'>").text(response[key].id);
            var race = $("<td scope='col'>").text(response[key].race);
            var flavors = $("<td scope='col'>").text(response[key].flavors);
            var effectsPos = $("<td scope='col'>").text(response[key].effects.positive);
            // var effectsNeg = $("<td scope='col'>").text(response[key].effects.negative);
            // var effectsMed = $("<td scope='col'>").text(response[key].effects.medical);


            console.log("Strain ID: " + strainID);

            if (response[key].id === strainID) {
                tr.append(name)
                // tr.append(id)
                tr.append(race)
                tr.append(flavors)
                tr.append(effectsPos)
                // tr.append(effectsNeg)
                // tr.append(effectsMed)

                // Append the table row to the table body
                $("tbody").append(tr);
            }

        }
    }
})
