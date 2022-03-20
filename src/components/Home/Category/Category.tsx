import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

type Props = {name: string; icon: any; color: string};

export const Category = ({name, icon, color}: Props) => {
  const m = `mouhib${icon}0sdsds`;
  return (
    <>
      <View style={styles.catContainer}>
        <TouchableOpacity>
          <View
            style={
              (styles.iconBackground,
              {
                backgroundColor: color,
                borderRadius: 10,
                alignSelf: 'center',
                justifyContent: 'center',
                width: 70,
                height: 60,
                padding: 10,
              })
            }>
            <Image resizeMode="center" style={styles.icon} source={icon} />
          </View>
        </TouchableOpacity>

        <Text style={styles.catName}>{name}</Text>
      </View>
    </>
  );
};

const CategoryHeader = () => {
  const categories = [
    {name: 'Electronics', icon: 'gamepad', color: '#effcf8'},
    {name: 'Entertainment', icon: 'enter', color: '#fff4f3'},
    // {name: 'Collectibles', icon: '', color: ''},
    {name: 'Jewlery & Watches', icon: 'diamond', color: '#FCEFFB'},
    {name: 'Automotives', icon: 'car', color: '#FFFBEF'},
    // {name: 'Others', icon: '', color: ''},
    // {name: 'sdsdsd', icon: '', color: ''},
  ];
  const categories2 = [
    {
      name: 'Electronics',
      icon: require('../../../utils/images/gamepad.png'),
      color: '#effcf8',
    },
    {
      name: 'Entertainment',
      icon: require('../../../utils/images/play-button.png'),
      color: '#fff4f3',
    },
    {
      name: 'Collectibles',
      icon: require('../../../utils/images/pot.png'),
      color: '#E7F3FF',
    },
    {
      name: 'Jewlery & Watches',
      icon: require('../../../utils/images/diamond.png'),
      color: '#FCEFFB',
    },
    {
      name: 'Automotives',
      icon: require('../../../utils/images/car.png'),
      color: '#FFFBEF',
    },
    {
      name: 'Others',
      icon: require('../../../utils/images/other.png'),
      color: '#EFF0FC',
    },
    // {name: 'sdsdsd', icon: '', color: ''},
  ];
  return (
    <View>
      <Text style={styles.header}>Categories</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.container}
        horizontal={true}>
        {categories2.map(item => {
          return (
            <Category
              key={item.name}
              name={item.name}
              icon={item.icon}
              color={item.color}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryHeader;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,

    alignSelf: 'center',
  },
  iconBackground: {
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    width: 70,
    height: 60,

    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    color: '#2F394E',
    fontSize: 16,
  },
  catName: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 13,
  },
  catContainer: {
    marginRight: 10,
  },
});
