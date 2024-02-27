import { ScrollView,Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

const HomePage = () => {
    const handleLinkPress = (url) => {
      Linking.openURL(url);
    };
  
    return (
        <ScrollView style={styles.page}>
            <Text style={styles.title}>Practical
        application with React Native, JavaScript and API calls</Text>
        <Text style={styles.body}>On this app I use React Native, calling
        different APIs and using Routing and other React Native functions.</Text>
        <Text style={styles.title}>About me</Text>
        <Text style={styles.body}>I was born on February 14,2004 in the city of San Pedro, the city where i live. During the week i
        work, train, study and try to enjoy my family`s as much time as possible, especially my grandparents.
        I consider myself an efficient person, developing my activities in an organized manner. I am characterized by a
        healthy and passionate ambition, necessary to be learning and developing activities necessary to obtain the
        different goals that I propose.</Text>
        <Text style={styles.title}>Contact</Text>
        <TouchableOpacity
        style={styles.link}
        onPress={() => handleLinkPress('https://oficial-site-next-app.vercel.app/')}
      >
        <Text style={styles.linkText}>Oficial Site</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => handleLinkPress('mailto:fnhernandorena@gmail.com')}
      >
        <Text style={styles.linkText}>Email</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => handleLinkPress('https://www.instagram.com/nico_hernandorenaa/')}
      >
        <Text style={styles.linkText}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => handleLinkPress('https://www.linkedin.com/in/fnhernandorena/')}
      >
        <Text style={styles.linkText}>LinkedIn</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => handleLinkPress('https://t.me/Nico_Hernandorena')}
      >
        <Text style={styles.linkText}>Telegram</Text>
      </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    page: {
        flex:1,
    },
    title:{fontSize: 24,
        fontWeight: 'bold',
        color: '#0066CC',
        marginVertical:16
    },
    body:{
marginHorizontal:10},
link: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#0066CC',
  width: "90%",
  borderRadius: 20,
  paddingVertical: 10,
  paddingHorizontal: 20,
  margin: 10,
},
linkText: {
  fontSize: 16,
  fontWeight: 'bold',
},
})

export default HomePage;