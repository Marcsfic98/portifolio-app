
import {  View } from 'react-native';
import { Home } from './src/screen/Home';
import { Photo } from './src/components/Photo';
import { Skill } from './src/screen/Skill';
import { MyTabs } from './src/routes/ButtonTab';

export default function App() {
  return (
    <View >
      <MyTabs/>
    </View>
  );
}


