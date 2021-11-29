import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import PreferencesStack from "./preferencesStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Preferences: {
        screen: PreferencesStack,
    }
});

export default createAppContainer(RootDrawerNavigator);