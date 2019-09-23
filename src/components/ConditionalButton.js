import React, {useState} from 'react'
import {StyleSheet, TouchableOpacity, Text} from 'react-native'

const ConditionalButton = ({isActive, title, onShowNotif}) =>{
    
    return(
        <TouchableOpacity onPress={()=>onShowNotif()} disabled={!isActive} style={[styles.buttonMasuk,{backgroundColor: isActive? "#009666": "#9D9D9D"}]}>
              <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonMasuk:{
        borderRadius: 4,
        alignItems: "center",
        marginTop: 30,
        paddingVertical: 14
      },
      buttonText:{
        color: "#FFF",
        fontWeight: "600",
        lineHeight: 22,
        fontSize: 15
      }
})

export default ConditionalButton