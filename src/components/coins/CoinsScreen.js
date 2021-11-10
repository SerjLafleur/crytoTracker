import React, { useEffect, useState } from 'react'
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import Http from '../../libs/http'
import { CoinItem } from './CoinItem'
import colors from '../../res/colors'
import { CoinSearch } from '../coins/CoinSearch'

export const CoinsScreen = ({ navigation }) => {


    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)
    const [allCoins, setAllCoins] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const coins = await Http.instance.get('https://api.coinlore.net/api/tickers/')
            setCoins(coins.data)
            setAllCoins(coins.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const handlePress = (coin) => {
        navigation.navigate('CoinDetail', { coin })
    }

    const handleSearch = (query) => {
        const coinsFiltered = allCoins.filter((coin) => {
            return coin.name.toLowerCase().includes(query.toLowerCase()) ||
                coin.symbol.toLowerCase().includes(query.toLowerCase())
        })
        setCoins(coinsFiltered)
    }

    return (
        <View style={styles.container}>
            <CoinSearch
                onChange={handleSearch}
            />
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