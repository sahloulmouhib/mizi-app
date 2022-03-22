import {
  View,
  Text,
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Keyboard,
  KeyboardTypeOptions,
} from 'react-native';
import React, {FC, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FormikErrors, FormikTouched} from 'formik';

interface Props {
  value: string;
  setValue: ((text: string) => void) | undefined;
  onBlur?: any;
  placeHolder: string;
  label?: string;
  iconName?: string | undefined;
  errorField?: string | undefined;
  touchedField?: boolean | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  withError: boolean;
}
const CustomInput: FC<Props> = ({
  touchedField,
  onBlur,
  value,
  setValue,
  placeHolder,
  label,
  iconName,
  errorField,
  keyboardType,
  withError,
}) => {
  var icon;
  if (iconName) {
    if (withError) {
      if (value) {
        icon = (
          <Ionicons
            name={!errorField ? 'checkmark-done-outline' : 'close-outline'}
            size={22}
            style={styles.icon}
            color={!errorField ? 'lime' : 'red'}
          />
        );
      } else {
        icon = (
          <Ionicons
            name={iconName}
            size={22}
            style={styles.icon}
            color={'grey'}
          />
        );
      }
    } else {
      icon = (
        <Ionicons
          name={iconName}
          size={22}
          style={styles.icon}
          color={'grey'}
        />
      );
    }
  } else {
    icon = null;
  }
  return (
    <>
      {/* {label ? <Text style={styles.label}>{label}</Text> : null} */}
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            secureTextEntry={iconName === 'lock-closed-outline' ? true : false}
            keyboardType={!keyboardType ? 'default' : keyboardType}
            onBlur={onBlur}
            style={styles.input}
            value={value}
            onChangeText={setValue}
            placeholder={placeHolder}
          />
          {icon}
        </View>
        {errorField && touchedField && (
          <Text style={styles.errors}>{errorField}*</Text>
        )}
      </View>
    </>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  errors: {
    color: 'red',

    fontSize: 14,
  },
});
