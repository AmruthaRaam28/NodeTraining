const express = require('express')

const axios = require('axios');


const app = express()

app.get('/api/v1/:postcode', (req,res) => {
    let latitude;
    console.log("postcode : ", req.params['postcode']);
    const postcode = req.params['postcode'];
    axios.get('https://api.postcodes.io/postcodes/'+postcode)
  .then(function (postcodeResponse) {
    console.log(postcodeResponse.data.result.latitude);
    latitude = postcodeResponse.data.result.latitude;
  })
  axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCeq_WXcbv31m3-2BMD43WYIvubFwZLpeU&latitude='+latitude+'&keyword=shops')
  .then(function (mapResponse) {
    console.log(mapResponse.data);
    res.send(mapResponse.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function (response) {
    // always executed
    res.end();
  })
   })


   app.listen(3000, () => console.log(`Server is listening on port!!!`))