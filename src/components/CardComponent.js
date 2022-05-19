import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar,Avatar,Card,Title, Paragraph } from 'react-native-paper';
import { DefaultTheme,Provider as PaperProvider } from 'react-native-paper';

const CardComponent = (props) => {

    const {title,date,duration,distance,picture} = props

    return(<Card style={{height:220,margin:20,borderColor:'purple',borderWidth:2,borderRadius:20,backgroundColor:'rgba(24,24,24,0.7)'}}>
    <View style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'space-between'}}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
      <Card.Content >
        <Paragraph style={{color:'white'}}>{date}</Paragraph>
        <Title style={{color:'white'}}>{title}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: picture }} style={{width:150,height:100,margin:20,borderWidth:1,borderColor:'purple',borderRadius:20}}/>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
        <Card.Content>
          <Title style={styles.title}>Distance</Title>
          <Paragraph style={styles.subtitle}>{distance}</Paragraph>
        </Card.Content>
        <Card.Content>
          <Title style={styles.title}>Durée</Title>
          <Paragraph style={styles.subtitle}>{duration}</Paragraph>
        </Card.Content>
      </View>
    </View>
  </Card>)
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
      color:'white'
    },
    subtitle: {
      fontSize:20,
      marginBottom:10,
      color:'white'
    }
  });

export default CardComponent