import { StyleSheet, SafeAreaView, Text, Pressable, Image, View } from "react-native";
import { Themes } from "./assets/Themes";

export default function App() {
    <View style={styles.container}>
        <View style={styles.header}>
            <Image 
                source={require('./assets/spotify-logo.png')}
                style={styles.logo}
                resizeMode={'contain'}
            />
        </View>
    </View>
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Themes.colors.background,
        flex: 1,
    },
    header: {
        backgroundColor: Themes.colors.background,
        flex: 1/15,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    logo:{
        height: 20,
        width:20,
        alignItems: 'center',
        marginRight: 8
      }
})