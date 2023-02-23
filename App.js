import { SafeAreaView, ScrollView, Text, Button, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { style } from "./formstyle";
import Input from './src/Component/Input';


export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [rollno, setRollNo] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  function val() {
    if (!name) {
      alert("enter your name")
    }
    else if (!age) {
      alert("enter your age")
    }
    else if (!rollno) {
      alert("enter your rollno")
    }
    else if (!department) {
      alert("enter your department")
    }
    else {
      alert(" your form  submit Successfully....!!!")
    }
  }
  return (
    <ScrollView
      style={style.container}>
      <Text style={style.formstyle}> REGISTRATION FORM</Text>
      <Input place={'Enter Your Name'} username={name} max={16} inputchange={(val => { setName(val)})} />
      <Input place={'Enter Your Age'} username={age} keytype={'numeric'} max={3} inputchange={(val => { setAge(val) })} />
      <Input place={'Enter Your Rollno'} username={rollno} keytype={'numeric'} max={15} inputchange={(val) => { if(!isNaN(val)) {setRollNo(val) }}} />
      <Input place={'Enter Your Department'} username={department} inputchange={(val => { setDepartment(val) })} />
      <Input place={'Enter Your Email'} username={email} keytype={'email-address'} inputchange={(val => { setEmail(val) })} />
      <Input place={'Enter Your Phone'} username={phone} keytype={'numeric'} max={10} inputchange={(val => { setPhone(val) })} />
      <TouchableOpacity style={{
        borderRadius: 12, borderWidth: 1, width: 170, height: 50, alignSelf: 'center', margin: 40,
        backgroundColor: '#7FE817', justifyContent: 'center', alignItems: 'center'
      }} onPress={val}>
        <Text style={{ fontSize: 18, color: 'black' }} >SUBMIT</Text>
      </TouchableOpacity>

    </ScrollView>
  )
}
