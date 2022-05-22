import { useState } from 'react';
import { StatusBar,Image, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Display from './Display';
export default function App() {
  const [image, setImage] = useState("./assets/happy.jpg");
 
  function HappyPicture(){
    setImage(require("./assets/happy.jpg"))
  }
  function SadPicture(){
    setImage(require("./assets/sadd.png"))
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto"/>
      <View style={styles.MainBar}>
        
        <Text style={{margin:2, alignSelf:"center", fontWeight:'bold', fontSize:15, color: "black"}}>how do you feel?</Text>
        < View style={styles.pictures}>
          
          <TouchableOpacity onPress={HappyPicture}>
            <Image style={styles.Photo}
            source={require("./assets/happy.jpg")}/>
            <Text style={styles.Des}>HAPPY</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={SadPicture}>
            <Image style={styles.Photo}
            source={require("./assets/sadd.png")}/>
            <Text style={styles.Des}>SAD</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.FullView}>
      <Display image={image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainBar:{
    marginTop:150,
    width:"100%",
    backgroundColor:"pink",
    
  },
  Photo:{
    alignSelf:"center",
    height: 60,
    width:60,
    borderRadius:30,
    
  },
   FullView:{
     
     margin:10,
     backgroundColor: "blue",
     width: "100%",
     height:700,
     alignItems: "center",
     
    
   },
   
   Des:{
     alignSelf: "center",
     color:"black",
     fontSize:11,
     
     
   }
});


