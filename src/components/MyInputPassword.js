import React, {useState} from 'react'
import {StyleSheet, TextInput,View,Image, TouchableOpacity} from 'react-native'
import iconPassVisible from "../../res/images/visible_pass.png";
// import {Feather} from ""

const MyInputPassword = ({placeholderVal, isValid, onChecking}) =>{
    const [brColor, setBrColor] = useState("#9D9D9D")
    const [imgPass, setImagePass] = useState(iconPassVisible)
    const [toogle, setToogle] = useState(true)

    return(
      <View
          style={styles.container}
          >
        {/* <Feather name="eye-off"></Feather> */}
          <TextInput
          placeholder={placeholderVal}
          placeholderTextColor="#CACCCF"
          onFocus={()=>setBrColor("#009666")}
          onBlur={()=>setBrColor("#9D9D9D")}
          secureTextEntry={toogle}
          onChangeText={(newVal)=> (newVal !== "") ? onChecking(true) : onChecking(false)}
          style={[styles.inputText,{borderColor:(isValid) ? brColor:"#DC3F4D"}]}
        ></TextInput>

        <TouchableOpacity style={styles.imgContainer}
          onPress={()=> {
            setImagePass(toogle? iconPassVisible:iconPassVisible)
            setToogle(!toogle)
          }
          }>
          <Image source={imgPass}></Image>
      </TouchableOpacity>

      </View>
              )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 10,
      flexDirection: "row",
      alignItems: "center",
    },
      inputText:{
        backgroundColor: "#FFF",
        fontSize: 14,
        fontWeight: "200",
        lineHeight: 12,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 14,
        paddingLeft: 20,
        width:'100%'
      },
      imgContainer:{ position:"absolute", alignItems:"flex-end", right:20 }
})

export default MyInputPassword