import React from 'react';
import { withNavigation } from 'react-navigation';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BusinessDetail from './BusinessDetail';

const BusinessList = ({title, businesses, navigation}) => {
  if (!businesses.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businesses}
        keyExtractor={(business) => business.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("BusinessShow", {id: item.id})}>
              <BusinessDetail business={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
  }
})

export default withNavigation(BusinessList);