import { View, TextInput } from 'react-native';
const Input = (props) => {
  const { username, place, keytype, styles, max, inputchange } = props
  return (
    <View>
      <TextInput {...props}
        value={username}
        placeholder={place}
        keyboardType={keytype}
        maxLength={max}
        placeholderTextColor='grey'
        onChangeText={inputchange}
        style={{
          backgroundColor: 'white', borderRadius: 10, fontSize: 15, fontWeight: 'bold'
          , marginTop: 24, borderWidth: 1, width: 300, height: 65, alignSelf: 'center', paddingHorizontal: 8
        }}
      />
    </View>
  )
}

export default Input;