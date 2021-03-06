import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings84379Navigator from '../features/Settings84379/navigator';
import UserProfile84372Navigator from '../features/UserProfile84372/navigator';
import Settings84371Navigator from '../features/Settings84371/navigator';
import Settings84369Navigator from '../features/Settings84369/navigator';
import SignIn284367Navigator from '../features/SignIn284367/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings84379: { screen: Settings84379Navigator },
UserProfile84372: { screen: UserProfile84372Navigator },
Settings84371: { screen: Settings84371Navigator },
Settings84369: { screen: Settings84369Navigator },
SignIn284367: { screen: SignIn284367Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
