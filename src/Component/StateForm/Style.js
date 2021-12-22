import {StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../../utils/Dimentions';

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 5,
    marginBottom: 0,
    width: '100%',
    height: windowHeight / 18,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  inputContainerDesc: {
    marginTop: 5,
    marginBottom: 0,
    width: '100%',
    height: windowHeight / 4,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  inputContainers: {
    marginTop: 5,
    marginBottom: 0,
    height: windowHeight / 2,
    borderColor: '#ccc',
    borderRadius: 10,
    borderWidth: 1,

    backgroundColor: '#fff',
  },

  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },

  inputField: {
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
  editor: {
    flex: 1,
    padding: 0,
    height: 30,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },

  decstext: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  decsrowcol: {
    marginHorizontal: 20,
    marginVertical: 10,
  },

  textInput: {
    borderColor: 'grey',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 8,
    height: 43,
  },
  isHighlighted: {
    borderColor: 'green',
  },
});

export default styles;
