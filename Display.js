import { StyleSheet, Image,Text, View } from 'react-native'
import React from 'react'

export default function Display({image}) {
  return (
    <View style={styles.Photo}>
      <Image  style={styles.Photo} source = {image}/>
    </View>
  )
}

const styles = StyleSheet.create({
  Photo: {
    height:700,
    width:"100%",
    shadowOpacity:"100%",
    alignSelf:'center',
    
  
    
}
})