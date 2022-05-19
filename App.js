import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,View,ScrollView,ImageBackground } from 'react-native';
import { Appbar,Avatar,BottomNavigation } from 'react-native-paper';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';
import CardComponent from './src/components/CardComponent';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(0,0,0)',
    accent: 'yellow',
  },
};

const HomeRoute = () => (<ScrollView style={{flex:1}}><ImageBackground source={{uri:'https://images.hdqwalls.com/wallpapers/asia-neon-city-lights-reflections-01.jpg'}}>
<Text style={{color:'white',fontWeight:'bold',fontSize:32,marginTop:20,marginBottom:20,textDecorationLine:'underline',textAlign:'center'}}>Home</Text>
{data.map((e,k) => {

  const {title,date,distance,duration,picture} = e

  return(
    <CardComponent key={k} title={title} date={date} distance={distance} duration={duration} picture={picture}/>   
  )

})}
</ImageBackground>
</ScrollView>)

const HistoRoute = () => <View></View>

const AjoutRoute = () => <View></View>

const ParamsRoute = () => <View></View>

const data = require("./assets/data.json")


const App = () => {
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'histo', title: "Histo'", icon: 'history' },
    { key: 'ajout', title: "Ajout'", icon: 'plus-box' },
    { key: 'params', title: "Params'", icon: 'cog-outline' }
  ]);

  const list = [
    {
      test:'test',
    }
  ]

  list.map

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    histo: HistoRoute,
    ajout: AjoutRoute,
    params: ParamsRoute
  });
  
  return (
    <PaperProvider style={{flex:1}}>
    <Appbar theme={theme} style={styles.bottom}>
      <Text style={{color:'#7a34eb',fontSize:30,fontWeight:'bold'}}>Activity Tracker</Text>
      <Avatar.Text size={60} label="Avatar" labelStyle={{fontSize:10}} />
    </Appbar>
    
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor:'black'}}
    />
    <StatusBar/>
    </PaperProvider>
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
    justifyContent:'space-around',
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