import { Text,View,ScrollView,ImageBackground } from 'react-native';
import CardComponent from '../components/CardComponent';

const data = require("../../assets/data.json")

const HomeScreen = () => {
    return(
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1,justifyContent:'center'}} resizeMode='cover' source={{uri:'https://images.hdqwalls.com/wallpapers/asia-neon-city-lights-reflections-01.jpg'}}>
                <ScrollView style={{flex:1}}>
                    <Text style={{color:'white',fontWeight:'bold',fontSize:32,marginTop:20,marginBottom:20,textDecorationLine:'underline',textAlign:'center'}}>Home</Text>
                    {data.map((e,k) => {

                    const {title,date,distance,duration,picture} = e

                    return(
                        <CardComponent key={k} title={title} date={date} distance={distance} duration={duration} picture={picture}/>   
                    )

                    })}
                </ScrollView>
            </ImageBackground>
        </View>
)}

export default HomeScreen