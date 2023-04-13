import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/components/login_screen/LoginScreen';
import RegisterScreen from './src/components/register_screen/RegisterScreen';
import GameDashboardScreen from './src/components/game_dashboard//GameDashboardScreen';
import GamePlatformScreen from './src/components/game_platform/GamePlatformScreen';
import WalletScreen from './src/components/wallet_screen/WalletScreen';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App({ navigation }) {
  function WalletIcon() {
    const navigation = useNavigation();

    const navigateToWallet = () => {
      navigation.navigate("Wallet");
    }

    return (
      <Icon name="account-balance-wallet"
        size={30} color="#000"
        onPress={navigateToWallet} />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" component={LoginScreen} >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Dashboard"
          component={GameDashboardScreen}
          options={{
            headerTitle: "Dashboard",
            headerRight: () => (
              <WalletIcon />
            ),
          }}
        />
        <Stack.Screen name="Platform" component={GamePlatformScreen} />
        <Stack.Screen name="Wallet" component={WalletScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
