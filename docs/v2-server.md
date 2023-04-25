## How does this serverless API work?
vercel.json: The code here adds one rewrite to push all traffic to our index.js
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}

For additional information refer to Vercel's documentation [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions). 

## Under Construction (to be implemented)
This server's API uses Serverless Functions to handle these API endpoints:
1. `/api/geojson/geocode?latitude=XXX&longitude=YYY` accepts two query parameters:
      * latitude (required)
      * longitude (required)
  
    and `returns the councilId` for the given latitude and longitude
  
    Example:
  
      * `/api/geojson/geocode?latitude=34.051511&longitude=-118.251459`
  
    will return 
  
      * `{"council_id":14}`

    Our Frontend calls this API endpoint when it makes a dispatch to `getNcByLngLat(coords)` through `dispatchGetNcByLngLat` in [Map/Map.jsx](https://github.com/edwinjue/311-data-v2/blob/8bf96a75fb6058225cfebff18f618855afa9d32b/components/Map/Map.jsx#L511) (please refer to the [code comment](https://github.com/edwinjue/311-data-v2/blob/8bf96a75fb6058225cfebff18f618855afa9d32b/components/Map/Map.jsx#L498) to understand how a redux sagas makes the [actual API call](https://github.com/edwinjue/311-data-v2/blob/8bf96a75fb6058225cfebff18f618855afa9d32b/redux/sagas/data.js#L59)). This dispatch happens as soon as Address Search retrieves results from the MapboxGeocoder [here](https://github.com/edwinjue/311-data-v2/blob/8bf96a75fb6058225cfebff18f618855afa9d32b/components/Map/controls/MapSearch.jsx#L112)
  
2.   
