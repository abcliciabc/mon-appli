import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfilePage = () => {
  const name = "Boyer Alicia";
  const location = "Montigny-le-Bretonneux (78180)";
  const occupation = "Développeuse full stack";
  const imageUrl = './../assets/photo.jpg';

  return (
    <View style={styles.container}>
      <Image source={require(imageUrl)} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.location}>{location}</Text>
      <Text style={styles.occupation}>{occupation}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    marginBottom: 5,
  },
  occupation: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
