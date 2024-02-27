import { View,Text, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>NicoScript 
             React Native App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#3b82f6", 
        borderRadius: 9999,
        width: 300,
        padding: 10,
        marginBottom: 10,
    },
    title:{
        textAlign: 'center',
        backgroundColor: "#3b82f6", 
        width: '83%',  
    fontSize: 28,
    color: '#fff', 

    },
})

export default Header;