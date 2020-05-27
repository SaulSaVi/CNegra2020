
const request = require('request');


    function pelisGhibli(error,response,body){
        console.log("Status Code: "+response.statusCode);
        const data = JSON.parse(body)
        const total = [];

        console.log(data[1])
        
        // for (let i = 0; i < data[i].length; i++){
        //    total.push(data.title[i]); 
        //     }
        // console.log(total);
        }
    
    request(`https://ghibliapi.herokuapp.com/films`, pelisGhibli)
    