import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import React from 'react';
import CommonTextInput from '../components/CommonTextInput';
import axios from 'axios';
import {Formik} from 'formik';
import * as Yup from 'yup';

const RegisterScreen = ({navigation}: any) => {
  const register = async (values: any, {resetForm}: any) => {
    try {
      const response = await axios.post(
        'https://6831c7a06205ab0d6c3d96d1.mockapi.io/UserRegistrationAPI/companyRegistration',
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      console.log('Registered:', response.data);
      navigation.navigate('detailsScreen');
      resetForm();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Axios Error:', error.message);
      } else {
        console.error('Unexpected Error:', error);
      }
    }
  };
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
    industries: Yup.string().required('Industries is required'),
    job: Yup.string().required('Job is required'),
    location: Yup.string().required('Location is required'),
    jobExperience: Yup.number().required('Job experience is required'),
    companyAddress: Yup.string().required('Company address is required'),
    workMode: Yup.string().required('Work mode is required'),
  });

  return (
    <SafeAreaView style={styles.flex1}>
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}>
        <Text style={styles.registerText}>Register Screen!</Text>
        <Text style={styles.companyDetailsText}>Company Details</Text>
        <Formik
          initialValues={{
            companyName: '',
            industries: '',
            job: '',
            location: '',
            jobExperience: '',
            companyAddress: '',
            workMode: '',
          }}
          onSubmit={register}
          validationSchema={validationSchema}>
          {({handleChange, handleSubmit, values, errors, touched}) => (
            <>
              <View style={styles.mh20}>
                <CommonTextInput
                  value={values.companyName}
                  placeholderText={'Please enter Company name'}
                  onChange={handleChange('companyName')}
                  keyboardType={'default'}
                  isDisabled={false}
                />
                {touched.companyName && errors.companyName && (
                  <Text style={styles.errorText}>{errors.companyName}</Text>
                )}
              </View>

              <View style={styles.mh30}>
                <CommonTextInput
                  value={values.industries}
                  placeholderText={'Industries'}
                  onChange={handleChange('industries')}
                  keyboardType={'default'}
                  isDisabled={false}
                />
                {touched.industries && errors.industries && (
                  <Text style={styles.errorText}>{errors.industries}</Text>
                )}
              </View>

              <View style={styles.mh30}>
                <CommonTextInput
                  value={values.job}
                  placeholderText={'Job'}
                  onChange={handleChange('job')}
                  keyboardType={'default'}
                  isDisabled={false}
                />
                {touched.job && errors.job && (
                  <Text style={styles.errorText}>{errors.job}</Text>
                )}
              </View>

              <View style={styles.mh30}>
                <CommonTextInput
                  value={values.location}
                  placeholderText={'Location'}
                  onChange={handleChange('location')}
                  keyboardType={'default'}
                  isDisabled={false}
                />
                {touched.location && errors.location && (
                  <Text style={styles.errorText}>{errors.location}</Text>
                )}
              </View>

              <View style={styles.mh30}>
                <CommonTextInput
                  value={values.jobExperience}
                  placeholderText={'Job Experience'}
                  onChange={handleChange('jobExperience')}
                  keyboardType={'numeric'}
                  isDisabled={false}
                />
                {touched.jobExperience && errors.jobExperience && (
                  <Text style={styles.errorText}>{errors.jobExperience}</Text>
                )}
              </View>

              <View style={styles.mh30}>
                <CommonTextInput
                  value={values.companyAddress}
                  placeholderText={'Company Address'}
                  onChange={handleChange('companyAddress')}
                  keyboardType={'default'}
                  isDisabled={false}
                />
                {touched.companyAddress && errors.companyAddress && (
                  <Text style={styles.errorText}>{errors.companyAddress}</Text>
                )}
              </View>

              <View style={styles.mh30}>
                <CommonTextInput
                  value={values.workMode}
                  placeholderText={'Work Mode'}
                  onChange={handleChange('workMode')}
                  keyboardType={'default'}
                  isDisabled={false}
                />
                {touched.workMode && errors.workMode && (
                  <Text style={styles.errorText}>{errors.workMode}</Text>
                )}
              </View>

              <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.buttonStyle}
                  onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
  },
  companyDetailsText: {
    marginHorizontal: 20,
    marginTop: 40,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  buttonStyle: {
    height: 41,
    width: 165,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderColor: 'black',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    paddingHorizontal: 10,
    color: 'white',
  },
  flex1: {
    flex: 1,
  },
  mh20: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  mh30: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonView: {
    alignItems: 'center',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
export default RegisterScreen;
