import { Button, StyleSheet, TextInput, View } from "react-native"
import { NavBarProps } from "../models/models";

export const NavBar = ({ changeText, text, pressedHandler }: NavBarProps) => {

   return <>
      <View style={styles.navBar}>
         <View style={styles.inputWrapper}>
            <TextInput style={styles.input} value={text} onChangeText={changeText} placeholder='Enter your todo...' placeholderTextColor='rgba(255,255,255,0.5)' />
         </View>
         <View style={styles.btnWrapper}>
            <Button title="Add" onPress={pressedHandler} />
         </View>
      </View>
   </>

}

const styles = StyleSheet.create({
   navBar: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'stretch',
      marginBottom: 10
   },
   input: {
      paddingHorizontal: 4,
      paddingVertical: 2,
      borderColor: 'white',
      borderBottomWidth: 1,
      fontSize: 18,
      color: 'white'
   },
   btnWrapper: {
      width: '20%'
   },
   inputWrapper: {
      width: '80%',
      paddingRight: 10
   }
});