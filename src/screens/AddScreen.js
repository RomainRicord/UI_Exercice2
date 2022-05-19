import {StyleSheet,View,Text,ImageBackground} from 'react-native'
import { TextInput,Button } from 'react-native-paper'
import {useState} from 'react'


const AddScreen = () => {

    const [date_,setDate_] = useState("")
    const [title_,setTitle_] = useState("")
    const [distance_,setDistance_] = useState("")
    const [duration_,setDuration_] = useState("")
    const [image_,setImage_] = useState("")

    return(
        <View style={{flex:1}}>
            <ImageBackground style={{flex:1,justifyContent:'center'}} resizeMode='cover' source={{uri:'https://images.hdqwalls.com/wallpapers/asia-neon-city-lights-reflections-01.jpg'}}>
                
                <Text style={{color:'white',fontWeight:'bold',fontSize:32,marginTop:20,marginBottom:20,textDecorationLine:'underline',textAlign:'center'}}>Ajouter une activité</Text>
                
                <TextInput
                    style={styles.TextInput}
                    label="Date (Jour mois année)"
                    value={date_}
                    onChangeText={setDate_}
                />
                <TextInput
                    style={styles.TextInput}
                    label="Titre"
                    value={title_}
                    onChangeText={setTitle_}
                />
                <TextInput
                    style={styles.TextInput}
                    label="Distance ( en KM )"
                    value={distance_}
                    onChangeText={setDistance_}
                />
                <TextInput
                    style={styles.TextInput}
                    label="Durée"
                    value={duration_}
                    onChangeText={setDuration_}
                />
                <TextInput
                    style={styles.TextInput}
                    label="Image (URL)"
                    value={image_}
                    onChangeText={setImage_}
                />
                <Button style={{margin:20,borderRadius:20}} mode="contained" onPress={() => console.log('Pressed')}>
                    Valider
                </Button>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    TextInput:{
        marginLeft:40,
        marginRight:40,
        marginBottom:20
    }
});

export default AddScreen