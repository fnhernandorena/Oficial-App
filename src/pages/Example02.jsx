import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';

const Example02Page = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const submitForm = async () => {
    try {
      const res = await fetch(`https://search.imdbot.workers.dev/?q=${searchTerm}`);
      const { description } = await res.json();

      const movies = description.map((movie) => {
        const {
          '#TITLE': title,
          '#YEAR': year,
          '#IMG_POSTER': poster,
          '#RANK': rank,
          '#ACTORS': actors
        } = movie;

        return {
          title,
          year,
          poster,
          rank,
          actors
        };
      });

      setMovies(movies);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Avengers, Matrix, ..."
          style={styles.input}
        />
        <TouchableOpacity onPress={submitForm} style={styles.button}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.movieContainer}>
              <Image source={{ uri: item.poster }} style={styles.poster} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.year}>{item.year}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={styles.notFoundText}>Movies not found.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  formContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  movieContainer: {
    marginBottom: 20,
  },
  poster: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  year: {
    fontSize: 16,
    color: 'gray',
  },
  notFoundText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Example02Page;
