import { View, Text, StyleSheet } from "react-native";

const Index = () => {
    return (
        <View>
            <Text style ={styles.heading}>my name is sufyan</Text>
           <Text>my Mother's name is Amma</Text>
           <Text style ={styles.dad}>my Dad's name is Abdullah</Text>
           {/* write the paragraph about your family and and style it. */}
           <Text style = { styles.p}>My family has 7 members, and were from Nigeria. We love spending time together, especially cooking and watching movies. One of our favorite things to do is make classic suya. It’s a family tradition where we all pitch in—grilling the suya, preparing the veggies, and making our homemade yaji sauce to go with it. We also make a big batch of watermelon juice from scratch, adding mint and lime for a refreshing twist. The watermelon juice and suya are a perfect combination for our family feasts.

When we’re not cooking, we enjoy watching movies together. Some of our favorite movies are Mouna 1, Rupenzel, Rio, Migration, and Frozen. We love watching a good mix of animation, adventure, and heartwarming stories.

Overall, our family enjoys doing activities together. Whether it’s cooking, eating, or watching movies, we always make the most of our time together.

</Text>
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
        
    },
    p: {
      fontSize:10,
      color:"grey",
      fontWeight: "bold"
        
    }   
})
export default Index