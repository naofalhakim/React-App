import NewLogin from "../pages/NewLogin";
import LupaSandi from "../pages/LupaSandi";
import UbahSandi from "../pages/UbahSandi";
import HomePage from "../pages/homepage/HomePage";
import TugasSurvey from "../pages/homepage/TugasSurvey";
import DetailCalonPeminjam from "../pages/homepage/DetailCalonPeminjam";
import DataSurveiPeminjam from "../pages/homepage/DataSurveiPeminjam";
import DataBerhasilSubmit from "../pages/homepage/DataBerhasilSubmit";
// import homePageRoutes from "./homePageRoutes";

import { createAppContainer } from "react-navigation"; // Version can be specified in
import { createStackNavigator } from "react-navigation-stack";


const RootStack = createStackNavigator(
    {
      Login: NewLogin,
      "Lupa Sandi": LupaSandi,
      "Ubah Sandi": UbahSandi,
      "Home Page": HomePage,
      "Tugas Survey" : TugasSurvey,
      "Detail Calon Peminjam" : DetailCalonPeminjam,
      "Data Survei Peminjam" : DataSurveiPeminjam,
      "Data Berhasil Submit" : DataBerhasilSubmit,
    //   "TabNavigator" : homePageRoutes,
    },
    {
      initialRouteName: "Login",
      defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#009666',
            height:20
          },
      }
    }
  );
  
  const AppContainer = createAppContainer(RootStack);
  
  export default AppContainer;
