import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profile}>
        <Image source={require('./assets/images.jpg')} style={styles.profilePicture} />
        <Text style={styles.infoText}>STUDENT NAME: Jeremane Mahlakeng</Text>
        <Text style={styles.infoText}>STUDENT NUMBER: 901016665</Text>
        <Text style={styles.infoText}>CURRENT SEMESTER: SEMESTER 2</Text>
      </View>

      <View style={styles.grades}>
        <Text style={styles.sectionTitle}>Semester Grades:</Text>
        <Text style={styles.infoText}> Mobile device: A+</Text>
        <Text style={styles.infoText}> C++ programming 2: B+</Text>
        <Text style={styles.infoText}> Java programming 1: B+</Text>
        <Text style={styles.infoText}> Database systems: A</Text>
        <Text style={styles.infoText}> Software modeling and Analysis: B+</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20, 
  },

  profile: {
    marginBottom: 20,
    alignItems: 'center',
  },

  profilePicture: {
    marginBottom: 10,
    width: 700,
    borderRadius: 35,
    height: 700,
  },

  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },

  sectionTitle: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },

});
