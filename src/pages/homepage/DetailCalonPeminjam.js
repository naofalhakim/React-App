import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet, ScrollView,
  TouchableOpacity,
} from "react-native";
import iconBack from "../../../res/images/back_white.png";
import iconMap from "../../../res/images/map_icon.png";
import iconDate from "../../../res/images/icon_date.png";
import iconKeuangan from "../../../res/images/ic_keuangan.png";

import TopBar from "../../components/TopBar";

const DetailCalonPeminjam = () => {
    return(
        <View style={{height:'100%'}}>
            <TopBar></TopBar>
            <View style={styles.toolBar}>
            <View style={{flexDirection:"row", alignItems:"center",}}>
                <Image style={{width:17, height:11, marginRight:18}} source={iconBack}></Image>
                <View style={{marginTop:5}}>
                    <Text style={{color:'#FFF', fontSize:16, fontWeight:"600", lineHeight:24,}}>Detail Calon Peminjam</Text>                    
                </View>
            </View>
            </View>
            <ScrollView style={{backgroundColor:'#E5E5E5', paddingTop:30, paddingHorizontal:20,}}>
                <View style={{flexDirection:"row"}}>
                    <Image style={{width:85,height:85, backgroundColor:'#FFF',borderRadius:100}} source={iconBack}></Image>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, color:'rgba(51, 51, 51, 0.7)'}}>Mochamad Agusta Naofal H</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>082214119368</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>082214119368</Text>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Image source={iconMap}></Image>
                            <Text style={{marginLeft:6,color:'#009666',fontSize:12, fontWeight:"500", lineHeight:18,}}>Lihat di Google Maps</Text>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection:"row", marginTop:35}}>
                    <Image style={{width:32,height:32, marginTop:5}} source={iconDate}></Image>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, color:'rgba(51, 51, 51, 0.7)'}}>Jadwal Diajukan</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Sen, 22 Juli 2019 - Kam, 25 Juli 2019</Text>
                        <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, marginTop:10, color:'rgba(51, 51, 51, 0.7)'}}>Jadwal Disepakati</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, marginTop:10, color:'rgba(51, 51, 51, 0.7)'}}>Sen, 22 Juli 2019</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", marginTop:25}}>
                    <Image style={{width:32,height:32, }} source={iconKeuangan}></Image>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, color:'rgba(51, 51, 51, 0.7)'}}>Rerata Penghasilan</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Rp 4.000.000 per Bulan</Text>
                    </View>
                </View>

                <View style={{ marginTop:30}}>
                        <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, color:'rgba(51, 51, 51, 0.7)'}}>Informasi Usaha</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Usaha tani milik bersama</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Jl Sukabirus</Text>
                        <View style={{flexDirection:"row",marginTop:10}}>
                            <Image source={iconMap}></Image>
                            <Text style={{marginLeft:6,color:'#009666',fontSize:12, fontWeight:"500", lineHeight:18,}}>Lihat di Google Maps</Text>
                        </View>
                </View>

                <View style={{ marginTop:30}}>
                    <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, color:'rgba(51, 51, 51, 0.7)'}}>Informasi Lahan</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Luas Lahan</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>1.000 Ha</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Ketinggian</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>2.000 mdpl</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Lama Penggunaan Lahan</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>5 Tahun</Text>
                    </View>
                </View>

                <View style={{ marginTop:30, paddingBottom:40}}>
                    <Text style={{fontSize:16, fontWeight:"600", lineHeight:24, color:'rgba(51, 51, 51, 0.7)'}}>Komoditas Unggulan</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Komoditas</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Jagung</Text>
                    </View>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>Perkiraan Panen per Tahun</Text>
                        <Text style={{fontSize:12, fontWeight:"normal", marginTop:10, lineHeight:18, color:'rgba(51, 51, 51, 0.7)'}}>400 Kg</Text>
                    </View>
                </View>

            </ScrollView>
            <View style={{flexDirection:"row",backgroundColor:'rgba(0, 0, 0, 0.09)',height:70,paddingHorizontal:10, paddingVertical:10, justifyContent:'space-around'}}>
                <TouchableOpacity style={{marginHorizontal:5,backgroundColor:'#9D9D9D', alignItems:"center", paddingVertical:14, paddingHorizontal:24, borderRadius:4}}>
                    <Text style={{color:"#FFF",fontSize:15, fontWeight:"600", lineHeight:22,}}>Batalkan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal:5,backgroundColor:'#009666', alignItems:"center", paddingVertical:14, paddingHorizontal:75,borderRadius:4}}>
                    <Text style={{color:"#FFF",fontSize:15, fontWeight:"600", lineHeight:22,}}>Mulai Survei</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    toolBar:{
        height:60,
        backgroundColor:'#29B673',
        paddingVertical:15,
        paddingHorizontal:20,
    },
})

export default DetailCalonPeminjam