import { Slot, Stack } from "expo-router";
import { colors } from "../theme/colors";
//Crio um layout por arquivo de pasta 
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  } from '@expo-google-fonts/inter'
import { Loading } from "@/components/Loading";
  

export default function Layout() {

    const [fontsLoaded] = useFonts({ //devo sempre carregas as fontes antes de renderizar as telas 
        Inter_400Regular,
        Inter_500Medium,
        Inter_700Bold,
      })
    
      if (fontsLoaded) {
        return <Loading/>
      }

    return <Stack screenOptions={{
        headerShown:false, 
        contentStyle:{backgroundColor: colors.white}}
    }/>;
}