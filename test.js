import { View, Text, Button, StyleSheet, Touchable, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { style } from './style'
import { useState } from 'react'
export default function App() {
  const [Age, setNewAge] = useState(9)
  // create function 
  function ChangeAge() {
    if (Age < 10) {
      setNewAge("age below 18 ")
    }
    else if (Age > 18) {
      setNewAge(" age then greater 18")

    }
    else {
      setNewAge("you can drive")

    }
  }
  return (
    <SafeAreaView style={style.safemain}>
      <View style={style.container}>
        <Text style={style.textstyle}>{Age}</Text>
        {/* Touchableopacity-start */}
        <TouchableOpacity style={style.touchstyle}
          onPress={ChangeAge}
          activeOpacity={0.7}>
          <Text style={style.textbtn}>SAVE</Text>
        </TouchableOpacity>
        {/* Touchableopacity-end */}
      </View>
    </SafeAreaView>
  )
}




