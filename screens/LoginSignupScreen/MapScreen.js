import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';


const MapScreen = () => {

    const [coordinates,setCoordinates] = useState({});

    console.log(coordinates);

    return(
        <View style={styles.container}>
            <MapView
            style={styles.mapContainer}
            initialRegion={{
                latitude: 28.6297,
                longitude: 77.3721,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            >
                <Marker draggable
                    coordinate={{latitude: 28.6297, longitude: 77.3721}}
                    onDragEnd={(e) => {console.log("Marker => ", e.nativeEvent.coordinate); setCoordinates(e.nativeEvent.coordinate)}}
                />
            </MapView>
            <View style={{margin: 20}}>
                <Text>Latitude: {coordinates.latitude}</Text>
                <Text>Longitute: {coordinates.longitude}</Text>
            </View>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#fff",
    },
    mapContainer : {
        width: "100%",
        height: "60%"
    }

})

