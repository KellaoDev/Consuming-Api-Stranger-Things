import { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default function Index(props) {

  const navigation = props.navigation;

  const [imageRotated, setImageRotated] = useState(false);
  const [showImage, setShowImage] = useState(true)

  const handleToggleImage = () => {
    setShowImage(!showImage)
    setImageRotated(!imageRotated)
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={showImage ? require('../assets/wallpaper.jpg') : require('../assets/reverseWallpaper.jpg')}
          style={[styles.image, { transform: [{ rotate: imageRotated ? '180deg' : '0deg' }] }]}
        />
      </View>
      <View style={[styles.container, { top: hp('-6%') }]}>
        <TouchableOpacity style={styles.button} onPress={handleToggleImage}>
          <Text style={styles.buttonText}>REVERSE WORLD</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.container, { top: hp('-50%') }]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SearchScreen')}>
          <Text style={styles.buttonText}>ENTER THE WORLD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: 440,
    height: '100vh',
  },

  button: {
    width: wp('80%'),
    height: hp('8%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15
  },

  buttonText: {
    fontSize: hp('3%'),
    color: 'white',
  },
});

