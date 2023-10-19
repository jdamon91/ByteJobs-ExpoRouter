import { Dimensions, StyleSheet } from 'react-native';
import { COLORS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000030',
  },
  modalView: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    flex: 1,
    width: Dimensions.get('window').width,
  },
  animationContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  modalSubText: {
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.primary,
    marginTop: 25,
  },
});

export default styles;
