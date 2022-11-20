
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from "./src/pages/List";
import Registration from "./src/pages/Registration";
import Modification from "./src/pages/Modification";
import Detalhes from "./src/pages/Detalhes";


const Stack = createStackNavigator();

import{
  useFonts,
  Inter_700Bold,
  Roboto_700Bold,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/dev"

import AppLoading from 'expo-app-loading';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Inter_700Bold,
    Roboto_700Bold,
    Inter_500Medium,
    Inter_400Regular,
  })

  if(!fontsLoaded){
    <AppLoading></AppLoading>
  }
  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='List'>
        <Stack.Screen
          name="List"
          component={List}
        />
        <Stack.Screen
          name="Cadastro"
          component={Registration}
        />
        <Stack.Screen
          name="Editar"
          component={Modification}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
        />
          
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

