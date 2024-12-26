import { Text,View,StyleSheet, Image } from "react-native";    

const ProfileCardComponent = () =>{
    return(
        <View>
            <Image source={require("../assets/images/sufyan.jpg")} style={styles.imageStyle}/>
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