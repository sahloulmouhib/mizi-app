import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {mainColor, secondaryColor} from '../../constants/colors';

type Props = {title: string};

const CustomTitle: FC<Props> = ({title}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
    </>
  );
};

export default CustomTitle;

const styles = StyleSheet.create({
  title: {
    marginBottom: 20,
    fontSize: 22,
    color: secondaryColor,
    fontWeight: 'bold',
  },
});
