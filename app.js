const express = require('express');
const https = require('https');
const app = express();
const ejs = require('ejs');
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname+'/index.html');
});


//Flags - nsfw, religoius,  political, racist, sexist, explicit
app.post("/", function(req, res){
  const baseURL = "https://v2.jokeapi.dev";
  const newURL = "https://v2.jokeapi.dev/joke/Any?type=single"

  https.get(newURL, function(response){
        
    response.on("data", function(data){
        const jokeData = JSON.parse(data);
        //console.log(jokeData.joke);
        res.render("res", {jokeText: jokeData.joke});

    });
  });

});

app.listen(port, function(){
  console.log("Server listening at port "+port);
})





// const JokeAPI = require('sv443-joke-api');

// JokeAPI.getJokes()
//   .then((res) => res.json())
//   .then((data) => {

//     if (data.hasOwnProperty('setup') && data.hasOwnProperty('delivery')){
//         console.log(data.setup);
//         console.log(data.delivery);
//     }else{
//         console.log(data.joke);
//     }
//   })