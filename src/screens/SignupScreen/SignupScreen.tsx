import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomTitle from '../../components/CustomTitle/CustomTitle';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import CheckBox from '@react-native-community/checkbox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/naviagation';
import CategoryHeader from '../../components/Home/Category/Category';
type Props = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

const SignupScreen = ({navigation}: Props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SignIn');
        }}>
        <Image
          resizeMode="cover"
          style={{
            transform: [{rotate: '180deg'}],

            marginTop: 20,
            height: 50,
            width: 50,
          }}
          source={require('../../utils/images/down-arrow.png')}
        />
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        <Text style={styles.joinText}>
          Get ready to bid on some cool auctions!
        </Text>
        <Image
          resizeMode="cover"
          style={{
            height: 200,

            flex: 4,
          }}
          source={require('../../utils/images/signup2.png')}
        />
      </View>

      <CustomTitle title="Sign Up" />
      <CustomInput
        value={email}
        setValue={setEmail}
        placeHolder="First Name"
        label="First Name"
        iconName="person-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Last Name"
        label="Last Name"
        iconName="person-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Birth Date"
        label="Birth Date"
        iconName="calendar-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Phone Number"
        label="Phone Number"
        iconName="call-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Budget Range"
        label="Budget Range"
        iconName="pricetags-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Keywords"
        label="Keywords"
        iconName="newspaper-outline"
      />

      <CustomInput
        value={email}
        setValue={setEmail}
        placeHolder="Email"
        label="Email Address"
        iconName="mail-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Password"
        label="Password"
        iconName="lock-closed-outline"
      />
      <CustomInput
        value={password}
        setValue={setPassword}
        placeHolder="Confirm Password"
        label="Confirm Password"
        iconName="lock-closed-outline"
      />
      <View style={styles.agreementContainer}>
        <CheckBox disabled={false} value={true} />
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, nulla
          nihil! Nobis modi, accusantium .Nobis modi, accusantium .
        </Text>
      </View>

      <CustomButton title={'Sign Up'} />
      <Text
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={styles.registerText}>
        Already Have an account?
      </Text>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    backgroundColor: 'white',
  },
  loginWithText: {
    alignSelf: 'center',
    color: '#b1b6bf',
    fontWeight: 'bold',
  },
  register: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  registerText: {
    textAlign: 'center',
    color: '#4070b4',
    fontWeight: '600',
    marginBottom: 20,
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
  agreementContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 30,
    marginVertical: 10,
  },
  agreement: {},
  imageContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  joinText: {
    color: 'black',
    fontWeight: 'bold',
    flex: 3,
    fontSize: 20,
    alignSelf: 'center',
  },
});
