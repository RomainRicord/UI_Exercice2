import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View } from 'react-native';
import { Appbar,Avatar,BottomNavigation } from 'react-native-paper';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './src/screens/HomeScreen';
import AddScreen from './src/screens/AddScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0,0,0)',
    accent: 'yellow',
  },
};

const HistoRoute = () => <View></View>

const ParamsRoute = () => <View></View>

const App = () => {
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'ajout', title: "Ajout'", icon: 'plus-box' },
    { key: 'histo', title: "Histo'", icon: 'history' },
    
    { key: 'params', title: "Params'", icon: 'cog-outline' }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    histo: HistoRoute,
    ajout: AddScreen,
    params: ParamsRoute
  });
  
  return (
    <SafeAreaProvider>
      <PaperProvider style={{flex:1}}>
        <Appbar theme={theme} style={styles.bottom}>
          <Text style={{color:'#7a34eb',fontSize:30,fontWeight:'bold',marginLeft:40}}>Activity Tracker</Text>
          <Avatar.Text style={{marginRight:40}}size={60} label="Avatar" labelStyle={{fontSize:10}} />
        </Appbar>
        
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
          barStyle={{backgroundColor:'black'}}
        />
        <StatusBar/>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    display:'flex',
    justifyContent:'space-between',
    height:80
  },
  title: {
    
  },
  subtitle: {
    fontSize:20,
    marginBottom:10
  }
});

export default App