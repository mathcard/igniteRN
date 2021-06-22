import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import { 
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import theme from './src/global/styles/theme';

//import { Dashboard } from './src/screens/Dashboard';
//import { CategorySelect } from './src/screens/CategorySelect';
import { Register } from './src/screens/Register';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
  // Carregando as fonts
  const [ fontsLoaded ] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  }); 

  if(!fontsLoaded) {
    return <AppLoading/>
  }

  return (
    <ThemeProvider theme={theme}>      
      {/*<Dashboard/>  
      <CategorySelect /> 
      <Register/> */}       
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>    
    </ThemeProvider>    
  )
}

