import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screen/Home";
import { Skill } from "../screen/Skill";

const {Navigator,Screen} = createBottomTabNavigator()

export function MyTabs() {
    return(
        <Navigator screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:'#8130a1',borderTopWidth:0,elevation:0,shadowOpacity:0}}}>
            <Screen name="Home" component={Home}/>
            <Screen name="Skills" component={Skill}/>
        </Navigator>
    )
}