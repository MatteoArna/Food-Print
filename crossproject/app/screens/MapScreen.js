import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map/Map'
import {useNavigation} from "@react-navigation/native";
import Header from '../components/Header'
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/Map/NavigateCard'


export default function HomeScreen(){
    {/* Disable upper page description */}
    const navigation = useNavigation();
    React.useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown: false,
      })
    }, [])
  
    const Stack = createStackNavigator();

    return (
        <SafeAreaView>
            <Header />
            <View style={tw`h-1/3`}>
                <Map />
            </View>
            <View style={tw`h-2/3`}>
                <Stack.Navigator>
                    <Stack.Screen
                        name="NavigateCard"
                        component={NavigateCard}
                        options={{
                            headerShown: false,
                        }}
                    />

                </Stack.Navigator>
            </View>
        </SafeAreaView>
  
    );
  };