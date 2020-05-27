
const request = require('request');


    function pelisGhibli(error,response,body){
        console.log("Status Code: "+response.statusCode);
        const data = JSON.parse(body)
        const total = [];
        
        for (let i = 0; i < data.length; i++){
            console.log(data[i].title); 
            }
        
        //console.log(data[0].title)
        }
    
    request(`https://ghibliapi.herokuapp.com/films`, pelisGhibli)
    

    request.get('https://ghibliapi.herokuapp.com/films', (err, res, body) => {
  return new Promise((resolve, reject) => {
    res.statusCode === 200
      ? resolve(JSON.parse(body).results)
      : reject(`Error ${res.statusCode}`);
  });
})
  .then( res => {console.log(res)} )  // Función Flecha Optimizada
  .catch((err) => { return console.log(err);}); // Función Flecha sin optimizar