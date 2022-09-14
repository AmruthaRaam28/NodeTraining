const express = require('express')

const axios = require('axios');


const app = express()

app.get('/api/v1/:postcode', (req,res) => {
    console.log("postcode : ", req.params['postcode']);
    const postcode = req.params['postcode'];
    axios.get('https://api.postcodes.io/postcodes/'+postcode)
  .then(function (response) {
    // handle success
    console.log(response.data.result);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

   })


   app.listen(3000, () => console.log(`Server is listening on port!!!`))