import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CategoryHeader from '../../components/Home/Category/Category';
import {secondaryColor} from '../../constants/colors';
import CustomInput from '../../components/CustomInput/CustomInput';
import Auction from '../../components/Home/Auction/Auction';
import Auction2 from '../../components/Home/Auction/Auction2';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <ScrollView>
      {/* <View>
        <Image
          style={styles.drawer}
          source={require('../../utils/images/menu.png')}
        />
      </View> */}
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, Mouhib</Text>

        <Text style={styles.discover}>Discover the new auctions</Text>
        <CustomInput
          placeHolder="Search..."
          value=""
          setValue={() => {}}
          iconName="apps-outline"
        />
        <CategoryHeader />
        <Text style={styles.hello}>Auctions</Text>
        <Auction2 name={require('../../utils/images/eye.jpg')} />
        <Auction2 name={require('../../utils/images/ps5.jpeg')} />
        <Auction2 name={require('../../utils/images/iphone.jpeg')} />
        <Auction name={require('../../utils/images/eye.jpg')} />
        <Auction name={require('../../utils/images/iphone.jpeg')} />
        <Auction name={require('../../utils/images/ps5.jpeg')} />
        <Auction name={require('../../utils/images/eye.jpg')} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  drawer: {
    width: 30,
    height: 30,
    alignSelf: 'flex-start',
    marginHorizontal: 30,
    marginTop: 20,
  },
  hello: {
    fontWeight: 'bold',
    color: secondaryColor,
    fontSize: 22,
  },
  discover: {
    fontWeight: '600',

    marginBottom: 10,
  },
});
