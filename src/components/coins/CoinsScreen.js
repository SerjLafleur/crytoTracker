import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Http from '../../libs/http'
import { CoinItem } from './CoinItem'
import colors from '../../res/colors'

export const CoinsScreen = ({ navigation }) => {


    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const coins = await Http.instance.get('https://api.coinlore.net/api/tickers/')
            setCoins(coins.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const handlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }



    return (
        <View style={styles.container}>
            {loading ?
                <ActivityIndicator
                    size='large'
                    color='#fff'
                    style={styles.louder}
                /> :
                (
                    <FlatList
                        data={coins}
                        renderItem={({ item }) =>
                            <CoinItem item={item} onPress={() => handlePress(item)} />
                        }
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.charade,

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
    },
    louder: {
        margin: 60
    }
})