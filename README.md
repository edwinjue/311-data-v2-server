# 311-data-v2-server
The Server/API backend portion of the [311-Data v2 Project](https://github.com/edwinjue/311-data-v2)

## Project Technology

### [Frontend](https://github.com/edwinjue/311-data-v2)
* Javascript (React)
* Redux
* Material-UI 4.x
* Vercel Deployment

### [Server/API](https://github.com/edwinjue/311-data-v2-server)
* Node.js
* Express.js
* MongoDb (Atlas)
* Vercel Serverless API
* Vercel Deployment


[See here](client/README.md) for more information about 311 Data client technology.

## Resources
Public data used in this project:
* [MyLA311 Service Request Data 2023](https://data.lacity.org/City-Infrastructure-Service-Requests/MyLA311-Service-Request-Data-2023/4a4x-mna2)

The source code for this project is based on the original 311-Data [v2-aws](https://github.com/hackforla/311-data/releases/tag/v2-aws) release


## How does this serverless API work?
vercel.json: The code here adds one rewrite to push all traffic to our index.js
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}

For additional information refer to Vercel's documentation [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) which this project makes use of in order to serve out the following API endpoints:
* `/api/geojson/geocode` is an endpoint that accepts two query parameters:
  * latitude (required)
  * longitude (required)
  
  and `returns the councilId` of the given latitude and longitude coordinates
  
  Example:
  `/api/geojson/geocode?latitude=34.051511&longitude=-118.251459` retuns `{"council_id":14}`
  

