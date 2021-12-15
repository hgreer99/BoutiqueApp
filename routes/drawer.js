import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import HomeStack from "./homeStack";
import FilterStack from "./filterStack";
import PreferencesStack from "./preferencesStack";

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    Filters: {
        screen: FilterStack,
    },
    Preferences: {
        screen: PreferencesStack,
    },
});

export default createAppContainer(RootDrawerNavigator);