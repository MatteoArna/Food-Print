import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, {Marker} from 'react-native-maps'
import tw from 'tailwind-react-native-classnames'

const Map = () => {

    const origin = {latitude: 46.0107, longitude: 8.9603, description: "Origin"}

    return (
        <MapView
            style={tw`flex-1`}
            mapType="mutedStandard"
            initialRegion={{
                latitude: origin.latitude,
                longitude: origin.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
            }}
        >
            {origin?.latitude && origin?.longitude && (
                <Marker
                    coordinate={{
                        latitude: origin.latitude,
                        longitude: origin.longitude,
                    }}
                    title="Origin"
                    description={origin.description}
                    identifier="origin"
                />
            )}
        </MapView>
    );
}

export default Map

const styles = StyleSheet.create({})