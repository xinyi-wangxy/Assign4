import WebView from 'react-native-webview';

export default function Preview({route}) 
{
    const {p} = route.params;
    return (
       <WebView 
        source={{uri: p}}
        />
    );
}