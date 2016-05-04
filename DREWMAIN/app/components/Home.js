import React from 'react';
import {Link} from 'react-router';
import Title from './Title';


const Home  = React.createClass({


  componentWillMount: function(){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("user latitude" + position.coords.latitude);
        console.log("user longitude" + position.coords.longitude);
        let userLat = position.coords.latitude;
        let userLong = position.coords.longitude;
      L.mapbox.accessToken = 'pk.eyJ1IjoiZHJld3dvbGZzb24xIiwiYSI6ImNpbnFoNHYyNjEwNTl1a2x5Mmw4Y2djZG8ifQ.B7cFyV9ktmmLD0y9bdUhIw';
    Window.map = L.mapbox.map('map', 'mapbox.streets').setView(([userLat, userLong]||[40.7527, -73.9772]), 20);
    L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [
        userLong,
        userLat
      ]
    },
    properties: {
      title: 'You are here',
      'marker-size': 'large',
      'marker-color': '#f86767',
      'marker-symbol': 'star'
    }
  }).addTo(Window.map);
  })
  },

  render: function(){
    const StyleAll = {
      margin: '0',
      boxSizing: 'border-box',
      padding: "0",
      textAlign: 'center',
      fontFamily: "helvetica",
      color: "black"
    }
    const StyleData = {
      width: '25vw',
      zIndex: '3000',
      float: 'right',
      marginRight: '2vw',
      background: "rgba(1,1,1,0.75)",
    }

    return(
      <div style={StyleAll}>
        <Title />
        <div id='map'></div>
        <div style={StyleData}>{this.props.children}</div>
      </div>
    )
  }
});

export default Home;