import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {back, down, up} from '../assets/asset';

const DetailsScreen = ({navigation}: any) => {
  const [allData, setAllData] = React.useState([]);
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        'https://6831c7a06205ab0d6c3d96d1.mockapi.io/UserRegistrationAPI/companyRegistration',
      );
      console.log('All Data', response.data);
      setAllData(response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(' Axios Error:', error.message);
      } else {
        console.error(' Unexpected Error:', error);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };
  const renderData = ({item, index}: any) => {
    const isExpanded = expandedItems.includes(index);
    return (
      <View style={styles.card}>
        <View style={styles.headerRow}>
          <Text style={styles.label}>
            Company Name: <Text style={styles.value}>{item.companyName}</Text>
          </Text>
          <TouchableOpacity onPress={() => toggleExpand(index)}>
            <Image
              source={isExpanded ? up : down}
              resizeMode="contain"
              style={{width: 24, height: 24, marginRight: 10}}
            />
          </TouchableOpacity>
        </View>
        {isExpanded && (
          <>
            <Text style={styles.label}>
              Industries: <Text style={styles.value}>{item.industries}</Text>
            </Text>
            <Text style={styles.label}>
              Job: <Text style={styles.value}>{item.job}</Text>
            </Text>
            <Text style={styles.label}>
              Location: <Text style={styles.value}>{item.location}</Text>
            </Text>
            <Text style={styles.label}>
              Experience:{' '}
              <Text style={styles.value}>{item.jobExperience} years</Text>
            </Text>
            <Text style={styles.label}>
              Address: <Text style={styles.value}>{item.companyAddress}</Text>
            </Text>
            <Text style={styles.label}>
              Work Mode: <Text style={styles.value}>{item.workMode}</Text>
            </Text>
          </>
        )}
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={styles.new}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={back} style={styles.logo} />
        </TouchableOpacity>
        <Text style={styles.detailsText}>Details Screen!</Text>
      </View>
      <FlatList
        data={allData}
        renderItem={renderData}
        keyExtractor={(_, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  detailsText: {
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    fontSize: 24,
    color: 'red',
    marginLeft: 50,
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginHorizontal: 10,
  },
  label: {
    fontWeight: '600',
    marginBottom: 4,
    color: '#444',
  },
  value: {
    fontWeight: '400',
    color: '#666',
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  new:{
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
});

export default DetailsScreen;
