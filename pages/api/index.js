const app = require('express')();
const { v4 } = require('uuid');
const { cors } = require('../../middleware/index');
const { runMiddleware } = require('../../utils/index');
const geojsonController = require('../../controllers/geojson');

/** ************** Main Code ******************* */
app.get('/geojson/geocode', geojsonController.geocode);

/** ************** Example Code ******************* */
// API examples
app.get('/api', (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});

app.get('/api/item/:slug', (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

// CORS example
app.get('/api/cors', async (req, res) => {
  // Run the middleware
  await runMiddleware(req, res, cors);

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' });
});

module.exports = app;
