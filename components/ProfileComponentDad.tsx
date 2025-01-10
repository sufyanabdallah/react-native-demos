import { View, Text, Image, Button, StyleSheet } from 'react-native'
import React from 'react'

const ProfileComponentDad = () => {
  return (
    <View style={styles.container} >
      <Image source={require("../assets/images/daddy.jpg")} style={styles.imagestyle} />
      <Text>this is my dad</Text>
      <Text>he is very smart</Text>
      <Button title="press me" onPress={() => { alert("thank you for cheking my app") }

      } />

    </View>
  )
}

const styles = StyleSheet.create({
  imagestyle: {
    height: 200,
    width:200,
    borderRadius:20
  },
  container:{
    alignItems:"center" 


  }
})

export default ProfileComponentDad