import {StyleSheet} from 'react-native';
//colores
//9B9B9B Gris claro
//2D2D2D GRIS OSCURO
//FF9427 NARANJA

export const styles = StyleSheet.create({
  calculadoraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  result: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  resultPequeno: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
  },
  // botonGris: {
  //   backgroundColor: '#9B9B9B',
  // },
  // botonNaranja: {
  //   backgroundColor: '#FF9427',
  // },
});
