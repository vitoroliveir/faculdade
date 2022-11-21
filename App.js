
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from "./src/pages/List";
import Registration from "./src/pages/Registration";
import Modification from "./src/pages/Modification";
import Detalhes from "./src/pages/Detalhes";

const Stack = createStackNavigator();

export default function App() {

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName='Projetos'>
        <Stack.Screen
          name="Projetos"
          component={List}
          options={{
            headerTintColor: "#FF4444",
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Registration}
          options={{
            headerTintColor: "#FF4444",
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Editar"
          component={Modification}
          options={{
            headerTintColor: "#FF4444",
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="Detalhes"
          component={Detalhes}
          options={{
            headerTintColor: "#FF4444",
            headerTitleAlign: 'center'
          }}
        />
          
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

