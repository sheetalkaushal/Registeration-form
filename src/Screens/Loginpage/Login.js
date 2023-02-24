import { useState } from 'react'
import { View, Text ,Button,Image,TouchableOpacity} from 'react-native'
import { style } from '../../../formstyle'
import Input from '../../Component/Input'


export const Login = ({navigation}) => {
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  function values (){
    if (!username){
      alert("enter your username")
    }
    else if(!password){
      alert("enter your password")
    }
    else{
      alert("login sucessfully")
      navigation.navigate('Welcome')
    }
  }
  return (
    <View style={{flex:1,justifyContent:"center"}}>
      <Text style={style.lgtxt}>WELCOME TO LOGIN FORM</Text>
      <Image source={{uri:"https://images.squarespace-cdn.com/content/v1/5fb03bb53d280f2b635b98ca/1622162818498-RYLGX709PS7CGXZO66IS/portfolio-drawing-gif-web-v2.gif"}}  style={{height:150,width:150,alignSelf:'center',marginTop:5}}/>
      <Input 
      place="Enter your  username"
      styles={{height:40}} inputchange={(val) => {
        setUsername(val);}}
       />
         <Input 
      place="Enter your  password"
      styles={{height:40}}
      inputchange={(val) => {
        setPassword(val);}} secure={true}
       />
    <View style={style.btnlog}>
      <Button color={'green'}  title="Login"
     onPress={values}/>
    </View>
     <View style={{flexDirection:'row',justifyContent:"center"}}>
     <View style={{width:80, marginRight:10}}>
         <Button  color={'red'} title="Go back" onPress={() => navigation.goBack()} />
         </View>
         <View style={{ marginLeft:10}}>
         <Button  color={'lightblue'} title="SignUp" onPress={() => navigation.navigate("Form")} />
    </View>
   
 </View>
   </View>
  )
}

