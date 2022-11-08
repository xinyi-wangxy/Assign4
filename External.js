import WebView from 'react-native-webview';

export default function External({ route}) 
{
    const {e} = route.params;
    return (
       <WebView 
        source={{uri: e}}
        />
    );
}