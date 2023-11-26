import { View, Text, Button, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen3 = () => {
  const upiParams = {
    pa: '7371048499@okbizaxis',
    pn: 'Rimeso',
    tn: 'Test for UPI',
    am: 10,
    cu: 'INR',
    mc: 'BCR2DN4T227IHBAF',
    tr: '5857152787',
    url: 'https://rimeso.in'
  };

  // Construct the UPI payment URL from the object
  const upiPaymentUrl = `upi://pay?pa=${upiParams.pa}&pn=${upiParams.pn}&tn=${upiParams.tn}&am=${upiParams.am}&cu=${upiParams.cu}&url=${upiParams.url}`;

  // console.log(upiPaymentUrl);

  function getData() {
    fetch('http://validate.jsontest.com/?json=%5BJSON-code-to-validate%5D')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // JSON response data
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }

  getData()


  return (
    <View style={{ flex: 1, backgroundColor: '#055578', }}>
      <Text>Screen3</Text>
      <Button title='Click to pay' onPress={() => {
        Linking.openURL(upiPaymentUrl)
          .then((data) => {
            console.log('UPI Payment success:', data);
          })
          .catch((error) => {
            console.error('UPI Payment error:', error);
          });
      }} />

      <TouchableOpacity style={{marginTop:10, backgroundColor: '#000000', padding:5}} onPress={()=> Linking.sendIntent('android.settings.LOCATION_SOURCE_SETTINGS')}>
        <Text> Open setting</Text>
      </TouchableOpacity>

    </View>
  )
}

export default Screen3