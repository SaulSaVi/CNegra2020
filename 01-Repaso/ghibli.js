
const request = require('request');


    function pelisGhibli(error,response,body){
        console.log("Status Code: "+response.statusCode+"\n");
        const data = JSON.parse(body)
        
        console.log("+Lista de películas de estudio ghibli+\n")
        for (let i = 0; i < data.length; i++){
            console.log(`${data[i].title} (${data[i].release_date})`); 
            }
        }
    
    request('https://ghibliapi.herokuapp.com/films', pelisGhibli)
    

// request.get('https://ghibliapi.herokuapp.com/films', (err, res, body) => {
//   if (res.statusCode === 200) {
//     const characters = JSON.parse(body).results;
//     data.map(title => {
//       console.log(data.title);
//     })
//   } else {
//     console.log('Error en la petición');
//   }
// });


//     request.get('https://ghibliapi.herokuapp.com/films', (err, res, body) => {
//   return new Promise((resolve, reject) => {
//     res.statusCode === 200
//       ? resolve(JSON.parse(body).results)
//       : reject(`Error ${res.statusCode}`);
//   });
// })
//   .then( (res) => {console.log(res)} )  // Función Flecha Optimizada
//   .catch((err) => { return console.log(err);}); // Función Flecha sin optimizar