import { useState } from 'react'
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { useRouter, Stack } from 'expo-router';
import { COLORS, icons, images, SIZES} from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';  


const Home = () => {

    const router = useRouter();
return ( 
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={`https://img.icons8.com/?size=256&id=52232&format=png`} dimension="100%" />
                ),
                headerTitle: ""
            }}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
            <View 
                style={{
                    flex: 1, padding: SIZES.medium
                }}
            >
            </View>
            <Welcome
                
            />
            <Popularjobs />
            <Nearbyjobs />
        </ScrollView>
    </SafeAreaView>
)
}


export default Home;