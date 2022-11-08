import { FlatList, StyleSheet, SafeAreaView, Text, Pressable, Image, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import Homescreen from "./Homescreen"
import External from "./External"
import Preview from "./Preview"

const Stack = createStackNavigator();
export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth(true);

  if (token) {
    const HomeScreenWrapper = ({navigation}) => {
      return (<Homescreen tracks={tracks} navigation={navigation} />);
    }

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreenWrapper} options={{headerShown: false}} />
          <Stack.Screen name="External"  component={External}/>
          <Stack.Screen name="Preview" component={Preview}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
      
  } else{
    return (
      <SafeAreaView style={styles.container}>
        <Pressable style={styles.button} onPress={ getSpotifyAuth}>
          <Image 
            source={require('./assets/spotify-logo.png')}
            style={styles.logo}
            resizeMode={'contain'}
            />
          
          <Text style={styles.text}>CONNECT WITH SPOTIFY</Text>
        </Pressable>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  container2: {
    backgroundColor: Themes.colors.background,
    flex: 1,
  },
  button: {
    backgroundColor: Themes.colors.spotify,
    borderRadius: 99999,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-around',
    
  },
  text: {
    color: Themes.colors. white,
    fontWeight: "bold",
    fontSize: 17
  },
  logo:{
    height: 20,
    width:20,
    alignItems: 'center',
    marginRight: 8
  },
  header: {
    backgroundColor: Themes.colors.background,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal:10,
    marginBottom: 10
  },
  headertext: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  }

});
