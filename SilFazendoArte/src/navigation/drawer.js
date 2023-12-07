import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { Home } from "../pages/home/index.js"
import { Sobre } from "../pages/sobre/index.js"
import { Produtos } from "../pages/produtos/index.js"
import {Sugestoes} from "../pages/Sugestoes/index.js";
import { Header } from 'react-native/Libraries/NewAppScreen';
import{Overview} from '../pages/Overview/index.js';

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    //Container de navegação
    <NavigationContainer>
      {/* define que é o drawer e a tela inicial */}
      <Drawer.Navigator initialRouteName="Home" 
      screenOptions={{
        drawerStyle: {
          width: '60%',
      },
      drawerActiveTintColor: "#781b77",
      drawerActiveBackgroundColor: "#ce85c9",
      drawerStyle:{
        backgroundColor: "#b66fb2"
      },
      headerStyle: {
        backgroundColor: "#b66fb2"
      }
  }}>
        {/* Tela a tela abaixo */}
        <Drawer.Screen name="Sil Fazendo Arte" component={Home} />
        <Drawer.Screen name="Sobre" component={Sobre} />
        <Drawer.Screen name="Produtos" component={Produtos} />
        <Drawer.Screen name="Sugestões" component={Sugestoes} />
        <Drawer.Screen name="Overview" component={Overview} />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}