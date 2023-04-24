import React from 'react';

export default function Index() {
  return (
    <>
      <p>311-data-v2 API Server at your service!</p>
      <br />
      Try these endpoints:
      <br />
      <ol>
        <li>
          <a href="/api/geojson/geocode?latitude=34.051511&longitude=-118.251459">
            /api/geojson/geocode?latitude=34.051511&longitude=-118.251459
          </a>
        </li>
      </ol>
    </>
  );
}
