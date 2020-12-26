import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const BusinessDetail = ({ business }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: business.image_url}} />
      <Text style={styles.name}>{business.name}</Text>
      <Text>{business.rating} Stars, {business.review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginBottom: 10,
  },
  image: {
    width: 250, // ***need width and height for image otherwise won't display (Image element collapses on itself)***
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
  }
});

export default BusinessDetail;
