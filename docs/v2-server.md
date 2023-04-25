## How does this serverless API work?
vercel.json: The code here adds one rewrite to push all traffic to our index.js
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}

For additional information refer to Vercel's documentation [Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions). 
