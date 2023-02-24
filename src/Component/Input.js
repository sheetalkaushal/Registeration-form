import { View, TextInput, StyleSheet } from 'react-native';
const Input = (props) => {
  const { username, place, keytype, styles, max, inputchange,secure } = props
  const style=StyleSheet.create({
    input:{
     backgroundColor: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'
     , marginTop: 24, borderWidth: 1, width: 300, height: 65, alignSelf: 'center', paddingHorizontal: 8
   }})
  return (
    
    <View>
      <TextInput {...props}
        value={username}
        placeholder={place}
        keyboardType={keytype}
        maxLength={max}
        placeholderTextColor='grey'
        secureTextEntry={secure}
        onChangeText={inputchange}
        style={{...style.input,...styles}}
        
      />
    </View>
  )
  
}

export default Input;