import React from 'react';

import {View,TouchableHighlight,StyleSheet,Alert,ToastAndroid} from 'react-native';

import { Avatar, Button } from 'react-native-paper';

import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [Pic, SetPic] = React.useState('');
  const setToastMessage = message => {
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };
  const uploadImage = () => {
    let options = {
      mediaType: 'mixed',
      type:'jpeg',
      path:'images',
      quality: 1,
      includeBase64: true,
      selectLimit:1,
      noData:true,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        setToastMessage('Cancelled image selection');
      } else if (response.errorCode == 'permission') {
        setToastMessage('Permission not satisfied');
      } else if (response.errorCode == 'others') {
        setToastMessage(response.errorMessage);
      } else if (response.assets[0].fileSize > 2097152) {
        Alert.alert(
          'Maximum image size exceeded',
          'Please choose a file under 2 MB',
          [{ text: 'OK' }],
        );
      } else {
        SetPic(response.assets[0].base64);
        console.log(response)
      }
    });
  };
  const removeImage = () => {
    SetPic('');
    setToastMessage('Image removed');
  };

  return (
    <View>
      <View style={styles.centerContent}>
        <TouchableHighlight
          onPress={() => uploadImage()}
          underlayColor="rgba(0,0,0,0)">
          <Avatar.Image
            size={250}
            source={{ uri: 'data:image/png;base64,' + Pic }}
          />
        </TouchableHighlight>
      </View>
      <View
        style={[styles.centerContent, { marginTop: 25, flexDirection: 'row' }]}>
        <Button mode="contained" onPress={() => uploadImage()}>
          Upload Image
        </Button>
        <Button
          mode="contained"
          onPress={() => removeImage()}
          style={{ marginLeft: 20 }}>
          Remove Image
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },

});