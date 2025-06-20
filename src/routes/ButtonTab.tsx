import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screen/Home";
import { Skill } from "../screen/Skill";

const {Navigator,Screen} = createBottomTabNavigator()

export function MyTabs() {
    return(
        <Navigator>
            <Screen name="Home" component={Home}/>
            <Screen name="Skills" component={Skill}/>
        </Navigator>
    )
}