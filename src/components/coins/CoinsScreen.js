import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

export const CoinsScreen = ({ navigation }) => {


    // botón de ir a deteail
    const handlePrees = () => {
        console.log('holaa estoy pulsando', navigation)
        navigation.navigate('CoinDetail')
    }
    return (
        <View style={styles.container}>
            <Text>Coins Screen</Text>
            <Pressable
                style={styles.btn}
                onPress={handlePrees}
            >
                <Text
                    style={styles.btnText}
                >Ir a detail</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    btn: {
        padding: 8,
        backgroundColor: 'blue',
        borderRadius: 8,
        margin: 16
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    }
})