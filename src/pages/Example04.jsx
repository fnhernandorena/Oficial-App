import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';

const Example04Page = () => {
  const [dayImages, setDayImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('https://api.nasa.gov/EPIC/api/natural/images?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA');
        const dayImagesData = await res.json();
        setDayImages(dayImagesData);
      } catch (error) {
        console.error('Error fetching NASA API images:', error);
      }
    };

    fetchImages();
  }, []);

  const getImageUrl = (image) => {
    const dateString = image.date;
    const dateParts = dateString.split(' ');
    const date = dateParts[0].split('-');
    return `https://api.nasa.gov/EPIC/archive/natural/${date[0]}/${date[1]}/${date[2]}/png/${image.image}.png?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA`;
  };

  return (
    <ScrollView style={styles.container}>
      {dayImages.map((image, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{ uri: getImageUrl(image) }} style={styles.image} />
          <Text style={styles.text}>Coordinates: Latitude: {image.centroid_coordinates.lat}, Longitude: {image.centroid_coordinates.lon}</Text>
          <Text style={[styles.text, styles.caption]}>{image.caption}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    marginBottom: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  caption: {
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
});

export default Example04Page;
