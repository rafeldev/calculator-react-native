import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

//inteface
interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}

//styles
import {styles} from '../theme/appTheme';

export const BotonCalc = ({
  texto,
  color = '#2D2D2D',
  ancho = false,
  accion,
}: Props) => {
  //mi forma de cambiar el color a traves de props
  // const handleColor = (color: string) => {
  //   if (color === 'gris') {
  //     return styles.botonGris;
  //   } else if (color === 'naranja') {
  //     return styles.botonNaranja;
  //   } else {
  //     return null;
  //   }
  // };

  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View
        style={{
          ...styles.boton,
          backgroundColor: color,
          width: ancho ? 180 : 80,
        }}>
        <Text
          style={{
            ...styles.botonText,
            color: color === '#9B9B9B' ? 'black' : 'white',
          }}>
          {texto}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
