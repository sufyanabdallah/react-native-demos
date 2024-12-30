import { Text,View,StyleSheet, Image, Button } from "react-native";    

const ProfileCardComponent = () =>{
    return(
        <View>
            <Image source={require("../assets/images/sufyan.jpg")} style={styles.imageStyle}/>
            <Text>sufyan abdallah </Text>
            <Text>i am a pogrammer i like pograming</Text>
            <Button title="press me" onPress={()=>{alert("thank you for cheking my porfile")}

            }/>
            
        </View>
    )
}
const styles =  StyleSheet.create({
    imageStyle : {
        height:200,
        width:200,
    }
})
export default ProfileCardComponent