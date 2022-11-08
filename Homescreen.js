import { FlatList, StyleSheet, SafeAreaView, Text, Pressable, Image, View } from "react-native";
import SongItem from "./Songitem";
import millisToMinutesAndSeconds from "./utils/millisToMinutesAndSeconds";
import { Themes } from "./assets/Themes";
export default function App({navigation,tracks}) {
    console.log(tracks)
    const renderSongItem = ({item}) => (
        <SongItem 
        navigation={navigation}
        albumimage={item.album.images[0].url}
        title={item.name}
        artist={item.artists[0].name}
        album={item.album.name}
        duration={millisToMinutesAndSeconds(item.duration_ms)}
        eurl = {item.external_urls.spotify}
        purl = {item.preview_url}
        />
    );
    return (
        <View style={styles.container2}>
                <View style={styles.header}>
                    <Image 
                        source={require('./assets/spotify-logo.png')}
                        style={styles.logo}
                        resizeMode={'contain'}
                    />
                    <Text style={styles.headertext}>
                        MY TOP TRACKS
                    </Text>
                </View>
                <FlatList 
                    data={tracks}
                    renderItem={(item) => renderSongItem(item)}
                    keyExtractor={(item) => item.id}
        
                />
        </View>
    );
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
  