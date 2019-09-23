import React, {useState} from 'react'
import {StyleSheet, TextInput} from 'react-native'

const MyInputText = ({placeholderVal, isValid, onChecking}) =>{
    const [brColor, setBrColor] = useState("#9D9D9D")

    return(
        <TextInput
          placeholder={placeholderVal}
          placeholderTextColor="#CACCCF"
          onFocus={()=>setBrColor("#009666")}
          onBlur={()=>setBrColor("#9D9D9D")}
          keyboardType="email-address"
          onChangeText={(newVal)=> (newVal !== "") ? onChecking(true) : onChecking(false)}
          style={[styles.inputText,{borderColor:(isValid) ? brColor:"#DC3F4D"}]}
        ></TextInput>
      )
}

const styles = StyleSheet.create({
      inputText:{
        backgroundColor: "#FFF",
        fontSize: 14,
        fontWeight: "200",
        lineHeight: 12,
        borderWidth: 1,
        borderRadius: 4,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginTop: 10,
      }
})

export default MyInputText