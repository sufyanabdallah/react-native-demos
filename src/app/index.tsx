import { View, Text, StyleSheet } from "react-native";

const Index = () => {
    return (
        <View>
            <Text style ={styles.heading}>my name is sufyan</Text>
           <Text>my mother name is amma</Text>
           <Text style ={styles.dad}>my dad name is abdullah</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    heading  : {
        fontSize:20,
        fontWeight:"bold",
         color:"red"
    },
    dad:{
        fontSize :20,
        fontWeight:"bold",
        color:"blue"
        
    }   
})
export default Index