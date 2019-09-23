import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity, 
  FlatList
} from "react-native";
import TopBar from "../../components/TopBar";
import iconBack from "../../../res/images/back_white.png";

const TugasSurvey =()=>{
    const listBorrower = [
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'1'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'2'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'3'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'4'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'5'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'6'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'7'},
        {image:iconBack, name:'Mochamad Agusta Naofal H', status:'Kelompok Tani', location:'Bandung', key:'8'},
    ]

    return(
    <View >
        <TopBar></TopBar>
        <View style={styles.toolBar}>
            <View style={{flexDirection:"row", alignItems:"center",}}>
                <Image style={{width:17, height:11, marginRight:18}} source={iconBack}></Image>
                <View style={{marginTop:5}}>
                    <Text style={{color:'#FFF', fontSize:16, fontWeight:"600", lineHeight:24,}}>Jadwal Hari Ini</Text>
                    <Text style={{color:'#FFF', fontSize:12, lineHeight:18}}>Kamis, 22 Agustus 2019</Text>
                </View>
                
            </View>
        </View>
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator={false} data={listBorrower}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=> props.navigation.navigate('Detail Calon Peminjam')} style={styles.containerItemOuter}>
                        <View style={styles.containerItem}>
                            <Image style={styles.imgProfile} source={iconBack}></Image>
                            <View >
                                <Text style={{color:'rgba(51, 51, 51, 0.7)', fontSize:15, fontWeight:"600", lineHeight:22}}>{item.name}</Text>
                                <Text style={{color:'rgba(51, 51, 51, 0.7)', fontSize:12, fontWeight:"normal", lineHeight:18,}}>{item.status}</Text>
                                <Text style={{color:'rgba(51, 51, 51, 0.7)', fontSize:12, fontWeight:"normal", lineHeight:18,}}>{item.location}</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor:'#009666', borderRadius:4, paddingVertical:6, paddingHorizontal:24, alignSelf:"flex-end", right:80}}>
                                <Text style={{color:'rgba(51, 51, 51, 0.7)', fontSize:15, fontWeight:"600", lineHeight:22, color:'#FFF'}}>Isi Survei</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                )
            }}>

            </FlatList>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    toolBar:{
        height:76,
        backgroundColor:'#29B673',
        paddingVertical:15,
        paddingHorizontal:20,
    },
    container:{
        padding:20,
        backgroundColor:'#E5E5E5',
        height:'85%'
    },
    containerItem:{
        borderRadius:4,
        backgroundColor:'#FFF',
        padding:10, 
        height:91,
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:4,
        alignItems:"center",
        flexDirection:'row',
        justifyContent:"space-between",

    }, containerItemOuter:{
        borderRadius:4, 
        backgroundColor:'#009666',
        height:91,
        position:'relative', 
        marginVertical:5,
    },
    imgProfile:{
        borderRadius:100,
        backgroundColor:'#009666',
        width:60,
        height:60,
        marginRight:20,
    },
    
})

export default TugasSurvey