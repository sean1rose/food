import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useBusinesses from '../hooks/useBusinesses';
import BusinessList from '../components/BusinessList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, businesses, errMsg] = useBusinesses();

  const filterBusinessesByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return businesses.filter(business => business.price === price);
  }


  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <ScrollView>
        <BusinessList
          businesses={filterBusinessesByPrice("$")}
          title="Cost Effective"
        />
        <BusinessList
          businesses={filterBusinessesByPrice("$$")}
          title="Bit pricier"
        />
        <BusinessList
          businesses={filterBusinessesByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;