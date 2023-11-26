import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'
import JailMonkey from 'jail-monkey'


const Screen1 = () => {
  const jsCode = `document.querySelector('.navbar-brand').style.backgroundColor = 'purple';
  console.log("Injected JavaScript executed!");`;

  // only reading "var type" defined variable 
  const injectedJavaScript = `
  try {
    const nativeVar = window.nativeVar;
    const nativeArray = window.nativeArray;
    const nativeLet = window.nativeLet;
    const data = {
      nativeVar: nativeVar,
      nativeArray: nativeArray,
      nativeLet: nativeLet
    };
    window.ReactNativeWebView.postMessage(JSON.stringify(data));
  } catch (error) {
    console.error("Error:", error);
  }
`;

  async function check() {
    const jailStatus = await JailMonkey.isDevelopmentSettingsMode()
    console.log("jailStatus", jailStatus)
    if (jailStatus) {
      // Alternative behaviour for jail-broken/rooted devices.
      alert("Not Safe: developer mode enabled")
    } else {
      alert("App is Safe")
    }
  }
  check()

  const handleWebViewMessage = event => {
    const data = JSON.parse(event.nativeEvent.data);
    // Handle the data received from the web page
    // console.log('Received data:', data.nativeVar);
    console.log('Received data:', data);
  };



  return (
    <View style={{ flex: 1 }}>

      <WebView
        source={{ uri: 'https://rimeso.in/subdomain/' }} // for get native code : https://rimeso.in
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        injectedJavaScript={injectedJavaScript}
        onMessage={handleWebViewMessage}
      />

      {/* <View style={{
        backgroundColor: '#6f00ff',
        width: 200,
        height: '100%',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 99, // Adjust the zIndex to control the overlay order
        padding: 16,
      }}>
        <TouchableOpacity style={{ backgroundColor: '#b942e9', marginVertical: 2 }}>
          <Text>Click 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#b942e9' }}>
          <Text>Click 2</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  )
}

export default Screen1