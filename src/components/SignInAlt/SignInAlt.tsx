import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';

type Props = {image: ImageSourcePropType};

export const SignInAltOne: FC<Props> = ({image}) => {
  return (
    <TouchableOpacity>
      <View style={styles.box}>
        <Image style={{width: 24, height: 24}} source={image} />
      </View>
    </TouchableOpacity>
  );
};

const SignInAlt = () => {
  return (
    <View style={styles.container}>
      <SignInAltOne image={require('../../utils/images/google.png')} />
      <SignInAltOne image={require('../../utils/images/facebook.png')} />
      <SignInAltOne image={require('../../utils/images/apple.png')} />
    </View>
  );
};

export default SignInAlt;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  box: {
    marginHorizontal: 6,
    height: 50,
    width: 90,
    borderColor: '#e9e9e9',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
