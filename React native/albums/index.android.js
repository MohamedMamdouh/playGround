// Import a library to help create a component 

import React from 'react';
import { Text, AppRegistry,View} from 'react-native';


// Create a component 
const App = () =>{
  return (
    <View>
        <Text>Awesome</Text>
        <Text>Awesome</Text>
        <Text>Awesome</Text>
        <Text>Awesome</Text>
        <Text>Awesome</Text>
    </View>
  );
};

//Render it to device screen 
AppRegistry.registerComponent('albums', ()=> App);