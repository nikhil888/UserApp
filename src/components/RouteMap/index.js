import React from "react";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
// AIzaSyDJbc1bGDd14B3IwxwNUzMphIiuQ2mVthg
const GOOGLE_MAPS_APIKEY = 'AIzaSyDJbc1bGDd14B3IwxwNUzMphIiuQ2mVthg';
// 28.680393,77.060103

const RouteMap = (props) => {

  const origin = {
    latitude: 28.680393,
    longitude:77.060103,
  };

  const destination = {
    latitude: 28.680393,
    longitude:77.070103,
  };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.680393,
        longitude:77.060103,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={"Destination"}
      />
    </MapView>
  );
};

export default RouteMap;