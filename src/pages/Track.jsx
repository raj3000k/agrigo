import React from 'react'
// import 'mapbox-gl/dist/mapbox-gl.css';
// import mapboxgl from 'mapbox-gl';
import Map from 'react-map-gl';

export default function Track() {
  return (
    <div className='h-full w-full'>
       <Map accessToken='pk.eyJ1IjoiaGFyc2h1MDcxMSIsImEiOiJjbG9ncmpqMmsxMzNxMmlxcGpqM21uOHVjIn0.UNBaBHVEWs9ogPvEZcPyoQ' mapLib={import('mapbox-gl')} initialViewState={{
      longitude: -100,
      latitude: 40,
      zoom: 3.5
    }}
    style={{width:'full', height:'full'}}
    mapStyle="mapbox://styles/harshu0711/cljieeo5b002d01o40q7fdqs1" mapboxAccessToken='pk.eyJ1IjoiaGFyc2h1MDcxMSIsImEiOiJjbG9ncmpqMmsxMzNxMmlxcGpqM21uOHVjIn0.UNBaBHVEWs9ogPvEZcPyoQ'></Map>
    </div>
  )
}   
