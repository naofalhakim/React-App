import React, {useState} from "react";
import {
  Text,
  View,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import TopBar from "../../components/TopBar";
import TanijoyLogo from "../../../res/images/White_Logogram_Tanijoy.png"
import IconDate from "../../../res/images/icon_date.png"
import IconSearch from "../../../res/images/icon_search.png"

const HomePage =()=>{
      return(
        <View style={{marginBottom:80,}}>
          <TopBar></TopBar>
          <View>
            <View style={{backgroundColor:'#009666', height:178, paddingHorizontal:20,}}>
              {/* Bar - image profile */}
              <View style={{flexDirection:"row", justifyContent:"space-between",  marginTop:35}}>
                <View style={{flexDirection:"row",}}>
                  <Image source={TanijoyLogo}></Image>
                  <Text style={{fontSize:24, lineHeight:36, fontWeight:"600", color:'#FFF', marginLeft:10}}>Surveyor</Text>
                </View>
                <Image style={{borderRadius:100, backgroundColor:'#9ECF83', width:35, height:35}} source={IconDate}></Image>
              </View>
            </View>

            {/* Middle Card */}
            <View style={{top:90, left:20, right:20, backgroundColor:'#FFF',borderRadius:6, height:159, padding:10, 
                      position:"absolute"}}>
                {/* Schedule Board */}
                <View style={{height:77, backgroundColor:'#9ECF83',flexDirection:"row", borderRadius:6, padding:10,}}>

                  <View style={{justifyContent:"center", position:"relative", alignItems:"center",}}>
                    <Image source={IconDate} style={{width:30,height:30, }}></Image>
                    <Text style={{fontSize:18,position:"absolute", fontWeight:"600", color:'#FFF', }}>27</Text>
                  </View>

                  <View style={{marginLeft:14, justifyContent:"center",}}>
                    <Text style={{fontSize:12,lineHeight:18, fontWeight:"600", color:'#6A6A6A', }}>Jadwal hari Ini</Text>
                    <Text style={{marginTop:3,fontSize:10,lineHeight:15, fontWeight:"normal", color:'#6A6A6A', }}>22 Agustus 2019</Text>
                    <Text style={{marginTop:3,fontSize:12,lineHeight:18, fontWeight:"600", color:'#058A44', }}>Ada 5 Calon Peminjam Harus Disurvei</Text>
                  </View>
                </View>
                {/* Button Lihat Jadwal */}
                <TouchableOpacity onPress={()=> props.navigation.navigate('Tugas Survey')} style={{
                backgroundColor: "#009666",borderRadius: 4,alignItems: "center",marginTop: 10,paddingVertical: 14}}>
                <Text style={{color: "#FFF",fontWeight: "600",lineHeight: 22,fontSize: 15,}}>
                  Lihat Jadwal Hari Ini
                </Text>
              </TouchableOpacity>

              </View>

            {/* Line */}
            <View style={{height:9, backgroundColor:'#F2F2F2',marginTop:80,}}></View>
            
          </View>
          {/* Section Konten dan search */}
          <View style={{marginTop:10, paddingHorizontal:20,}}>
              <View>
                <Text style={{fontSize:16, lineHeight:24, fontWeight:"600", color:'#9D9D9D'}}>Permintaan Survei Calon Peminjam</Text>
                <View style={{backgroundColor:'#E6E7E8',borderRadius:4, padding:11, marginTop:10, position:"relative", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}>
                  <Image style={{position:"absolute", left:10}} source={IconSearch}></Image>
                  <TextInput style={{fontSize:12, lineHeight:18,marginHorizontal:18}} placeholder="Cari nama calon peminjaman atau daerah"></TextInput>
                </View>
              </View>
          </View>
          {/* List View */}
          <ScrollView style={{paddingHorizontal:20,marginTop:20,height:200}} >
                {/* Item List */}
                <TouchableOpacity>
                  <View style={{height:1, backgroundColor:'#F2F2F2'}}></View>

                  <View style={{flexDirection:"row", padding:10}}>
                    <Image style={{borderRadius:100, backgroundColor:'#9ECF83', width:60, height:60}} source={IconDate}></Image>
                    <View style={{justifyContent:"space-between", flex:1, marginLeft:20}}>
                      <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#6A6A6A'}}>Muchammad Hatta Zakaria</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Kelompok Tani</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Bandung</Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <View>
                  <View style={{height:1, backgroundColor:'#F2F2F2'}}></View>

                  <View style={{flexDirection:"row", padding:10}}>
                    <Image style={{borderRadius:100, backgroundColor:'#9ECF83', width:60, height:60}} source={IconDate}></Image>
                    <View style={{justifyContent:"space-between", flex:1, marginLeft:20}}>
                      <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#6A6A6A'}}>Muchammad Hatta Zakaria</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Kelompok Tani</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Bandung</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{height:1, backgroundColor:'#F2F2F2'}}></View>

                  <View style={{flexDirection:"row", padding:10}}>
                    <Image style={{borderRadius:100, backgroundColor:'#9ECF83', width:60, height:60}} source={IconDate}></Image>
                    <View style={{justifyContent:"space-between", flex:1, marginLeft:20}}>
                      <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#6A6A6A'}}>Muchammad Hatta Zakaria</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Kelompok Tani</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Bandung</Text>
                    </View>
                  </View>
                </View>
                <View>
                  <View style={{height:1, backgroundColor:'#F2F2F2'}}></View>

                  <View style={{flexDirection:"row", padding:10}}>
                    <Image style={{borderRadius:100, backgroundColor:'#9ECF83', width:60, height:60}} source={IconDate}></Image>
                    <View style={{justifyContent:"space-between", flex:1, marginLeft:20}}>
                      <Text style={{fontSize:15, fontWeight:"600", lineHeight:22, color:'#6A6A6A'}}>Muchammad Hatta Zakaria</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Kelompok Tani</Text>
                      <Text style={{fontSize:12, fontWeight:"normal", lineHeight:18, color:'#6A6A6A'}}>Bandung</Text>
                    </View>
                  </View>
                </View>
              </ScrollView>
      </View>
      
      );
}

const styles = StyleSheet.create({
  yourStyle: {
    width:100,
    height:100,
  }
});

export default HomePage










     // resopnsive setting
      // const deviceWidth = Dimensions.get('window').width
      // const deviceHeight = Dimensions.get('window').height
      // const calcHeight = x => PixelRatio.roundToNearestPixel((deviceHeight * x) / 100)
      // const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100)

      // const imgWidthDP = 68
      // const imgWidth = PixelRatio.getPixelSizeForLayoutSize(imgWidthPx)

        // const gradient = "linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%), repeating-linear-gradient(-115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px),repeating-linear-gradient(115deg, transparent, transparent 20px, rgba(255,255,255,0.1) 20px, rgba(255,255,255,0.1) 40px)";

        // return (<Gradient gradient={gradient} style={styles.yourStyle}></Gradient>);
//         return(
//         <ScrollView>
//           {gradients.map((g, key) => {
//             return <Gradient
//                 key={key}
//                 gradient={g.gradient}
//                 style={{
//                   width:100,
//                   height:100,
//                   alignItems: "flex-start",
//                   justifyContent: "flex-end",
//                   padding: 20,
//                   marginBottom: 4
//                 }}
//               >
//                 <View>
//                   <Text style={{fontSize: 46, fontWeight: "100", opacity: .8}}>{g.title}</Text>
//                   <Text style={{ fontSize: 11, fontWeight: "500"}}>{g.gradient}</Text>
//                 </View>
//               </Gradient>
//           })}
//         </ScrollView>

//    );