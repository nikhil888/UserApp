import React, {useState, useEffect} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import PlaceRow from './PlaceRow.js';
import styles from './styles.js';
// 28.680393,77.060103
const homePlace = {
  description: 'Home',
  geometry: { location: { lat:28.680393, lng:77.060103} },
};
const workPlace = {
  description: 'Work',
  geometry: { location: { lat: 28.680393, lng: 77.060103} },
};

const DestinationSearch = (props) => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  useEffect(() => {
    console.warn('useEffect is called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);

  return (
    
    <SafeAreaView>
      <View style={styles.container}>

<GooglePlacesAutocomplete
  placeholder="Where from?"
  onPress={(data, details = null) => {
    setOriginPlace({data, details});
  }}
  enablePoweredByContainer={false}
  suppressDefaultStyles
  currentLocation={true}
  currentLocationLabel='Current location'
  styles={{
    textInput: styles.textInput,
    container: styles.autocompleteContainer,
    listView: styles.listView,
    separator: styles.separator,
  }}
  fetchDetails
  query={{
    key: 'AIzaSyDJbc1bGDd14B3IwxwNUzMphIiuQ2mVthg',
    language: 'en',
  }}
  renderRow={(data) => <PlaceRow data={data} />}
  renderDescription={(data) => data.description || data.vicinity}
  predefinedPlaces={[homePlace, workPlace]}
/>

<GooglePlacesAutocomplete
  placeholder="Where to?"
  onPress={(data, details = null) => {
    setDestinationPlace({data, details});
  }}
  enablePoweredByContainer={false}
  suppressDefaultStyles
  styles={{
    textInput: styles.textInput,
    container: {
      ...styles.autocompleteContainer,
      top: 55,
    },
    separator: styles.separator,
  }}
  fetchDetails
  query={{
    key: 'AIzaSyDJbc1bGDd14B3IwxwNUzMphIiuQ2mVthg',
    language: 'en',
    types: '(cities)',
  }}
  renderRow={(data) => <PlaceRow data={data} />}
/>

{/* Circle near Origin input */}
<View style={styles.circle} />

{/* Line between dots */}
<View style={styles.line} />

{/* Square near Destination input */}
<View style={styles.square} />

</View>
</SafeAreaView>
);
};

export default DestinationSearch;