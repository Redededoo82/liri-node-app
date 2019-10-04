require("dotenv").config();
// var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);
var fs = require('fs');
// var inquirer = require('inquirer');
var axios = require('axios');
var moment = require('moment');


// if user types concert this 
// do something

switch (process.argv[2]) {

    case "concert-this":
        
        var artist = process.argv[3];
        concert();

        function concert() {
            var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
            axios.get(URL)
            .then(function(results){
                console.log('UPCOMING SHOWS!:');
                for(var i = 0; i < 10; i++) {
                    console.log("\n" + results.data[i].venue.name);
                    console.log(results.data[i].venue.city + "," + results.data[i].venue.region);
                    console.log(moment(results.data[i].datetime));
                }

            })
        }
        
}