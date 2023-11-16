# amazon-web-scraping
This program was built using html, css node.js.
Process:
Installation of node.js and other dependencies(axios, express, cheerio, cors, nodemon)
The root backend file is the server.js where the amazon url was gotten using axios and 
it required params from the frontend.
#To start server use 'node server.js'.

Scraping was done using cheerio with the require method to parse the response and convert it to html.
Using the class names, the product title, image url, review and number of reviews were gotten and pushed to an array abd sent as a response.

#Using ajax to make a request from the end point created ('http://localhost:8000/prod/param')
the input value is passed as a param and the request is sent to the backend and a response parsed as json is returned and displayed accordingly.
