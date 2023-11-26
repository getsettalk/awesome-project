import { View, Text, StyleSheet, Platform, PermissionsAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Callout, Circle, Marker, MarkerAnimated } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation';


const About = () => {
  const [location, setlocation] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  const waterStation = [
    { name: "Raja Water", latitude: 26.26450891516925, longitude: 85.74976358867782, circle: false },
    { name: "Nayak Pani", latitude: 26.265915611308948, longitude: 85.74868368934267, circle: false },
    { name: "Sudh Jal", latitude: 26.2660549268752, longitude: 85.748817329155, circle: false },
    { name: "Sujit Pani Ghar", latitude: 26.26614607755663, longitude: 85.74931531751403, circle: false },
  ]


  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Location permission granted');
            // Call the function to get user's location here
            getUserLocation();
          } else {
            console.log('Location permission denied');
          }
        } else if (Platform.OS === 'ios') {
          const granted = await Geolocation.requestAuthorization();
          if (granted === 'granted') {
            console.log('Location permission granted');
            // Call the function to get user's location here
            getUserLocation();
          } else {
            console.log('Location permission denied');
          }
        }
      } catch (error) {
        console.error('Error while requesting location permission:', error);
      }
    };

    requestLocationPermission();

    // Call the updateCurrentLocation function every second
    // const interval = setInterval(getUserLocation, 5000);
  }, []);

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setlocation({
          ...location,
          latitude,
          longitude,
        });
      },
      error => console.error(error),
      { enableHighAccuracy: true, distanceFilter: 10 } // Adjust distance filter as needed
    );

    return () => {
      Geolocation.clearWatch(watchId);
    };
  }, [location]);



  // Function to get user's location
  const getUserLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position?.coords;
        setlocation({
          ...location,
          latitude,
          longitude
        })

        console.log('User location:', latitude, longitude);
        mapViewRef.current?.animateToRegion({
          latitude,
          longitude,
          latitudeDelta: location.latitudeDelta,
          longitudeDelta: location.longitudeDelta,
        }, 3000); // 1000 milliseconds for the animation duration
      },

      error => {
        console.log("error code", error)
        switch (error.code) {
          case 1:
            console.error('Location permission denied');
            break;
          case 2:
            console.error('Position unavailable');
            break;
          case 3:
            console.error('Location request timed out');
            // Handle timeout scenario here (e.g., show a message to the user or retry)
            break;
          case 4:
            console.error('Activity is null');
            break;
          default:
            console.error('Error getting user location:', error);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000, // Increase the timeout if needed

      }
    );
  };


  const mapViewRef = React.useRef(null);


  return (
    <View style={style.container}>
      <MapView
        ref={mapViewRef}
        showsUserLocation={true}

        showsTraffic={true}
        showsMyLocationButton={true}
        zoomEnabled={true}

        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: location.latitudeDelta,
          longitudeDelta: location.longitudeDelta,
        }}

        mapType='satellite'
        loadingEnabled={true}
        userLocationFastestInterval={5000}
        minZoomLevel={18}
        style={style.container}
      >

        {waterStation.map((item, index) => {
          return (
            <Marker
              key={index}
              coordinate={{ latitude: item.latitude, longitude: item.longitude }}
              pinColor="blue"
            >
              <Callout>
                {/* Your stateful view here */}
                <View style={{ backgroundColor: '#4e6b87' }}>
                  <Text>{item.name}</Text>
                </View>
              </Callout>
              {/* <MapViewDirections
                origin={{ latitude: location.latitude, longitude: location.longitude }}
                destination={{ latitude: item.latitude, longitude: item.longitude }}
                apikey={GOOGLE_MAPS_APIKEY}
              /> */}
            </Marker>


          )
        })}

        {/* This my own location Marker  */}
        <Marker.Animated
          coordinate={{ latitude: location.latitude, longitude: location.longitude }}

        >
          <Callout >

            <View style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 15
            }} >
              <Text style={{ color: 'black' }}>You are Here</Text>
            </View>
          </Callout>
        </Marker.Animated>
        <Circle
          center={{ latitude: location.latitude, longitude: location.longitude }}
          radius={100} // Set the radius of the circle (in meters)
          strokeWidth={1}
          strokeColor="rgba(3, 121, 240, 1)" // Customize the stroke color (optional)
          fillColor="rgba(0, 187, 255, 0.2)" // Customize the fill color (optional)
        />


      </MapView>
    </View>
  )
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d4f56'
  }
})
export default About