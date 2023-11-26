import React, { useRef, useState } from 'react';
import { View, Text, Alert } from 'react-native';
import WebView from 'react-native-webview';

const Screen2 = () => {
  const [content, setContent] = useState('');

  const webviewRef = useRef(null);

  const handleNavigationChange = (navState) => {
    // console.log('Navigation State Change:', navState);
  
    // Check if the WebView has navigated to the specific URL
    if (navState.url === 'http://ip.jsontest.com/') {
      // Inject JavaScript to extract JSON data from the response body
      const script = `
        const bodyContent = document.body.textContent;
        try {
          const jsonData = JSON.parse(bodyContent);
          window.ReactNativeWebView.postMessage(JSON.stringify(jsonData));
        } catch (error) {
          console.error('JSON Parsing Error:', error);
          window.ReactNativeWebView.postMessage(JSON.stringify({ error: error.message }));
        }
      `;
      webviewRef.current.injectJavaScript(script);
    }
  };
  

  const handleMessage = (event) => {
    const extractedContent = event.nativeEvent.data;
    // console.log(extractedContent)
    Alert.alert("Data Got:", extractedContent)
    setContent(extractedContent);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#494233' }}>
      <Text>Hello</Text>
      <View style={{ flex: 1 }}>
        <WebView
          ref={webviewRef}
          javaScriptEnabled={true} // Ensure JavaScript is enabled
          source={{ uri: 'https://www.jsontest.com/' }}
          onNavigationStateChange={handleNavigationChange}
          onMessage={handleMessage}
        />
      </View>
   
     
    </View>
  );
};

export default Screen2;
