
import {  View } from 'react-native';
import { MyTabs } from './src/routes/ButtonTab';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
       <View style={{ flex: 1 }} >
         <MyTabs/>
      </View>
    </NavigationContainer>
  );
}


