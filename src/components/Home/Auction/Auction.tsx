import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {secondaryColor} from '../../../constants/colors';

type Props = {name: any};

const Auction = ({name}: Props) => {
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={name} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.title}>Art Piece</Text>
          <Text style={styles.description}>
            Lorem ipsum, dolor sit amet consectetur dolor sit amet consectetur
          </Text>
          {/* <Text>By Mouhib</Text> */}
        </View>

        <View style={styles.dateBid}>
          <View>
            <Text style={styles.lowerDate1}> End Date</Text>
            <Text style={styles.lowerDate}> 5 days</Text>
          </View>
          <View>
            <Text style={styles.lowerBid1}> Current Bid</Text>
            <Text style={styles.lowerBid}>$200</Text>
          </View>
        </View>
      </View>
      <View style={styles.arrowHeart}>
        <Ionicons
          style={styles.icon}
          name="heart-outline"
          size={20}
          color="#FF2E61"
        />
        <Image
          style={styles.icon2}
          resizeMode="cover"
          source={require('../../../utils/images/down-arrow.png')}
        />
      </View>
    </View>
  );
};

export default Auction;

const styles = StyleSheet.create({
  image: {
    marginLeft: 5,
    height: 140,
    flex: 1.4,
    borderRadius: 15,
  },
  details: {
    flex: 2,

    alignSelf: 'stretch',
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 20,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: '#F2F2F2',
    borderWidth: 0,
    borderRadius: 10,
  },
  header: {margin: 10},
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: secondaryColor,
  },
  dateBid: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  description: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 12,
  },
  arrowHeart: {
    flex: 0.4,
    alignSelf: 'flex-start',
  },
  icon: {
    marginTop: 10,
  },
  icon2: {
    marginTop: 40,
    width: 30,
    height: 30,
  },
  lowerBid: {
    alignSelf: 'center',
    fontSize: 20,
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
});
