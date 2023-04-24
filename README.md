# 311-data-v2-server

vercel.json: The code here adds one rewrite to push all traffic to our index.js
{
  "rewrites": [{ "source": "/api/(.*)", "destination": "/api" }]
}


