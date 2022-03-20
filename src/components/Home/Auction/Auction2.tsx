import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {secondaryColor} from '../../../constants/colors';

type Props = {name: any};

const Auction2 = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={name} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.title}>Art Piece</Text>
          <View style={{flexDirection: 'row'}}>
            <Image
              resizeMode="cover"
              style={styles.time}
              source={require('../../../utils/images/clock.png')}
            />
            <Text style={styles.description}>Ends on 5 july </Text>
          </View>
        </View>
        <View style={styles.bid}>
          <Text style={styles.lowerBid1}> Current Bid</Text>
          <Text style={styles.lowerBid}>$200</Text>
        </View>
        <Ionicons
          style={styles.icon}
          name="heart-outline"
          size={20}
          color="#FF2E61"
        />
      </View>
    </View>
  );
};

export default Auction2;

const styles = StyleSheet.create({
  image: {
    height: 140,
    width: '100%',
    marginBottom: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  details: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    marginHorizontal: 10,
    marginBottom: 5,
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
    marginHorizontal: 0,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',

    borderColor: '#F2F2F2',
    borderWidth: 0,
    borderRadius: 10,
  },
  header: {},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: secondaryColor,
  },

  description: {
    fontSize: 12,
  },
  arrowHeart: {
    position: 'relative',
    bottom: 100,
  },
  icon: {
    position: 'absolute',
    left: 280,
    bottom: 150,
  },
  icon2: {
    marginTop: 40,
    width: 30,
    height: 30,
  },
  lowerBid: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#22C074',
  },
  lowerBid1: {
    position: 'relative',
    top: 5,

    alignSelf: 'center',
    fontSize: 10,

    color: '#22C074',
  },
  lowerDate1: {
    position: 'relative',
    top: 5,
    alignSelf: 'center',
    fontSize: 10,

    color: '#F3970D',
  },
  lowerDate: {
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F3970D',
  },
  bid: {
    padding: 3,
    backgroundColor: '#effcf8',
    borderRadius: 5,
  },
  time: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
});
