import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput/CustomInput';
import {RootStackParamList} from '../../navigation/naviagation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import SignInAlt from '../../components/SignInAlt/SignInAlt';
import CategoryHeader from '../../components/Home/Category/Category';

type Props = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SigninScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Image
        style={{
          width: 300,
          height: 300,
          alignSelf: 'center',
          marginVertical: 10,
        }}
        source={require('../../utils/images/signin.png')}
      />
      <CustomTitle title="Sign In" />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeHolder="Email"
        label="Email Address"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Password"
        label="Password"
      />
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>
      <CustomButton
        onPress={() => {
          navigation.navigate('Home');
        }}
        title="Sign In"
      />
      <Text style={styles.loginWithText}>Or login with...</Text>
      <SignInAlt />
      <View style={styles.register}>
        <Text style={styles.newText}>Don't have an account? </Text>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 50,
    backgroundColor: 'white',
  },
  loginWithText: {
    alignSelf: 'center',
    color: '#b1b6bf',
    fontWeight: 'bold',
    marginVertical: 20,
  },
  register: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    color: '#4070b4',
    fontWeight: '600',
  },
  newText: {
    color: 'grey',
    fontWeight: '500',
  },
  forgotPassword: {
    color: '#4070b4',
    fontWeight: '500',
    alignSelf: 'flex-end',
  },
});
