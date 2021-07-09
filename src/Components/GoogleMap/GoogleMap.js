import React from 'react';
import GoogleMapReact from 'google-map-react';

class GoogleMap extends React.Component {
     render() {
          return (
               <div style={{ height: '500px', width: '100%' }}>
                    <GoogleMapReact
                         defaultCenter={{
                              lat: 16.0352755,
                              lng: 108.2202726
                         }}
                         defaultZoom={11}
                    >
                    </GoogleMapReact>
               </div>
          );
     }
}

export default GoogleMap;