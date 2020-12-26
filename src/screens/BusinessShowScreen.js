import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import BusinessDetail from '../components/BusinessDetail';
import yelp from '../api/yelp';

const BusinessShowScreen = ({navigation}) => {
  const [business, setBusiness] = useState({});
  const id = navigation.getParam('id');

  const getBusiness = async (id) => {
    const res = await yelp.get(`/${id}`);
    setBusiness(res.data);
  }
  useEffect(() => {
    getBusiness(id);
  }, [])

  if (!business) {
    return null;
  }

  console.log('busines > ', business);
  return (
    <View>
      <Text>{business.name}</Text>
      <FlatList 
        data={business.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  );
};

const styles= StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default BusinessShowScreen;