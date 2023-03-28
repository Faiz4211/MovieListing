import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Splash from '../screens/Splash';
import MovieList from '../screens/MovieList';
import MovieDetails from '../screens/MovieDetails';


const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="List" component={MovieList} />
            <Stack.Screen name="Detail" component={MovieDetails} />

        </Stack.Navigator>
    )
}

export default StackNavigator;