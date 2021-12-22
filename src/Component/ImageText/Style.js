import {Dimensions, Platform, StyleSheet} from 'react-native';
const {width: screenWidth} = Dimensions.get('window');
import {windowHeight, windowWidth} from '../../utils/Dimentions';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 20,
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'blue',
  },
  img: {
    width: '40%',
    height: '40%',
    borderRadius: 20,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
