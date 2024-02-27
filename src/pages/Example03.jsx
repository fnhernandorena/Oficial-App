import React, { useState, useEffect } from 'react';
import { View, Text, Image, Linking, StyleSheet } from 'react-native';

const Example03Page = () => {
    const [dayImage, setDayImage] = useState({
        title: '',
        url: '',
        explanation: '',
        media_type: ''
    });

    useEffect(() => {
        const getMedia = async () => {
            try {
                const res = await fetch('https://api.nasa.gov/planetary/apod?api_key=LLWiwai8ZooMBWMdLnNN1nUlLBjtdNRUe9wjH7pA');
                const data = await res.json();
                setDayImage(data);
            } catch (error) {
                console.error('Error fetching media from NASA API:', error);
            }
        };

        getMedia();
    }, []);

    const renderMedia = () => {
        if (dayImage.media_type === 'image') {
            return <Image style={styles.image} source={{ uri: dayImage.url }} />;
        } else if (dayImage.media_type === 'video') {
            return <Text style={styles.video} onPress={() => Linking.openURL(dayImage.url)}>The image of the day is a video, see this!</Text>;
        } else {
            return <Text>Loading...</Text>;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{dayImage.title}</Text>
            {renderMedia()}
            <Text style={styles.explanation}>{dayImage.explanation}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1
    },
    title: {
        textAlign: 'center',
        backgroundColor: '#ccc',
        padding: 12,
        borderRadius: 100,
        fontSize: 24,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    explanation: { marginHorizontal:10,
        fontSize: 16,
    },
    video:{
        backgroundColor: "#000",
        padding:10,
        margin:5,
        color: "#fff",
        textAlign: 'center',
        fontSize: 16,
    }
});

export default Example03Page;
