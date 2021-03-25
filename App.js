import React,{useEffect} from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
// import '@react-native-community/geolocation';
import SearchResults from './src/screens/SearchResults';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

// navigator.geolocation = require('@react-native-community/geolocation');



  // const androidPermission = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //       {
  //         title: "Uber App Camera Permission",
  //         message:
  //           "Uber App needs access to your location " +
  //           "so you can take awesome rides.",
  //         buttonNeutral: "Ask Me Later",
  //         buttonNegative: "Cancel",
  //         buttonPositive: "OK"
  //       }
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log("You can use the location");
  //     } else {
  //       console.log("Location permission denied");
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // }

 

const App = () => {
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
  }

    useEffect(() => {
      if (Platform.OS === 'android') {
        getLocationAsync();
      } 
    }, [])

  return (
    <>
    <StatusBar barStyle="dark-content"/>
    {/* <HomeScreen/> */}
    <DestinationSearch/>
    {/* <SearchResults/> */}
    </>
  );
};

export default App;