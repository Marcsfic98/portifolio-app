import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screen/Home";
import { Skill } from "../screen/Skill";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#8130a1', borderTopWidth: 0 },
        tabBarActiveTintColor: "black",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Skills') {
            iconName = focused ? 'book' : 'book-outline';
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Screen name="Home" component={Home} />
      <Screen name="Skills" component={Skill} />
    </Navigator>
  );
}
