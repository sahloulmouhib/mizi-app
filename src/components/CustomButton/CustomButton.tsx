import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import {mainColor} from '../../constants/colors';

type Props = {
  title: string;
  onPress?: any;
  isValid?: boolean;
};

const CustomButton: FC<Props> = ({title, onPress, isValid}) => {
  return (
    <>
      <TouchableOpacity
        disabled={isValid}
        onPress={() => {
          onPress();
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',

    height: 50,
    backgroundColor: mainColor,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
export default CustomButton;
