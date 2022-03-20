import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeHolder: string;
  label?: string;
  iconName?: string | undefined;
}
const CustomInput: FC<Props> = ({
  value,
  setValue,
  placeHolder,
  label,
  iconName,
}) => {
  return (
    <>
      {/* {label ? <Text style={styles.label}>{label}</Text> : null} */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={setValue}
          placeholder={placeHolder}
        />
        {iconName ? (
          <Ionicons
            name={iconName}
            size={22}
            style={styles.icon}
            color="#777"
          />
        ) : null}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    padding: 10,
    backgroundColor: '#edf0f7',
    marginVertical: 10,
    borderRadius: 10,
    height: 43,
    paddingLeft: 28,
  },
  icon: {
    position: 'absolute',
    right: 20,
  },
  inputContainer: {
    justifyContent: 'center',
  },

  label: {
    fontSize: 16,
    color: '#6E6D7A',
    fontWeight: '500',
  },
  screenTitle: {
    marginVertical: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 20,
  },
});
