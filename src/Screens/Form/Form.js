import {
    SafeAreaView,
    ScrollView,
    Text,
    Button,
    View,
    TouchableOpacity,
  } from "react-native";
  import { useState } from "react";
  import { style } from "../../../formstyle";
  import Input from "../../Component/Input";
  
  export const Form=({navigation})=> {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [rollno, setRollNo] = useState("");
    const [department, setDepartment] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    function valu() {
      if (!name) {
        alert("enter your name");
      } else if (!age) {
        alert("enter your age");
      } else if (!email.match(regex)) {
        alert("enter your email properlly");
      } else if (!rollno) {
        alert("enter your rollno");
      } else if (!department) {
        alert("enter your department");
      } else {
        alert(" your form  submit Successfully....!!!");
      }
    }
    return (
      <ScrollView style={style.container}>
        <Text style={style.formstyle}> SIGNUP FORM</Text>
        <View style={{flexDirection:'row',justifyContent:'center'}}>
        <Text style={{color:'blue'}}> Already have an account ?
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate("Login")}><Text style={{color:'brown'}}>LOGIN</Text></TouchableOpacity>
        </View>
        <Input
          place={"Enter Your Name"}
          username={name}
          max={16}
          inputchange={(val) => {
            if (val.match("^[A-Za-z_-]*$")) {
              setName(val);
            }
          }}
        />
        <Input
          place={"Enter Your Age"}
          username={age}
          keytype={"numeric"}
          max={3}
          inputchange={(val) => {
            if (val.match("^[0-9]*$")) {
              setAge(val);
            }
          }}
        />
        <Input
          place={"Enter Your Rollno"}
          username={rollno}
          keytype={"numeric"}
          max={15}
          inputchange={(val) => {
            if (!isNaN(val)) {
              setRollNo(val);
            }
          }}
        />
        <Input
          place={"Enter Your Department"}
          username={department}
          inputchange={(val) => {
            setDepartment(val);
          }}
        />
        <Input
          place={"Enter Your Email"}
          username={email}
          keytype={"email-address"}
          inputchange={(val) => {
            setEmail(val);
          }}
        />
        <Input
          place={"Enter Your Phone"}
          username={phone}
          keytype={"numeric"}
          max={10}
          inputchange={(val) => {
            if (val.match("^[0-9]*$"))
            setPhone(val);
          }}
        />
        <TouchableOpacity
          style={{
            borderRadius: 12,
            borderWidth: 1,
            width: 170,
            height: 50,
            alignSelf: "center",
            margin: 40,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={valu}
        >
          <Text style={{ fontSize: 18, color: "white" }}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  