import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'
import colors from '../../res/colors'

export const CoinMarketItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.nameText}>{item.name}</Text>
            <Text style={styles.priceText}>{item.price_usd}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        borderColor: colors.zircon,
        borderWidth: 1,
        padding: 16,
        margin: 8,
        alignItems: 'center'
    },
    nameText: {
        color: colors.white,
        fontWeight: 'bold',
    },
    priceText: {
        color: colors.white
    }
})
