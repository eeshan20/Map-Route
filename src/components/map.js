import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'

mapboxgl.accessToken = "pk.eyJ1IjoiZWVzaGFuMjAiLCJhIjoiY2tiZml6cGJ1MHZ2dzJ1cG1mbnltcWc4MiJ9.bF9JVekHy5vNl5vh68KVHg";
class Map extends Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         viewport:{
    //             latitude: this.props.origin.lat,
    //             longitude: this.props.origin.long,
    //             height: 600,
    //             width: 1600,
    //             zoom: 12
    //         }
    //     }
    // }
    componentDidMount(){
        const map = new mapboxgl.Map({
            container: this.mapWrapper,
            style: "mapbox://styles/eeshan20/ckbfjfjk718h71io6cngb4909",
            center: [76.768066, 30.741482],
            boxZoom: true,
            zoom: 12,
            height: 600,
            width: 1600      
        });
        
          const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
          });
          map.addControl(new mapboxgl.NavigationControl());
          map.addControl(directions, 'top-left');      
    }
        
    render()
    { return(
        <div  ref={el => (this.mapWrapper = el)} 
        style= {{width: '80vw',
                height: '80vh',
                margin: '100px'}} />


        /* <ReactMapGL 
        {...this.state.viewport}
        mapboxApiAccessToken= "pk.eyJ1IjoiZWVzaGFuMjAiLCJhIjoiY2tiZml6cGJ1MHZ2dzJ1cG1mbnltcWc4MiJ9.bF9JVekHy5vNl5vh68KVHg"
        mapStyle= "mapbox://styles/eeshan20/ckbfjfjk718h71io6cngb4909"
        onViewportChange= {(viewport)=> this.setState({viewport})}
        /> */
        
    )
        
    }
}

export default (Map);

