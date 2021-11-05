import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, SectionList } from 'react-native'
import colors from '../../res/colors'

export const CoinDetailScreen = (props) => {

    const [coin, setCoin] = useState({})

    const getSymbolIcon = (name) => {

        if (name) {
            const symbol = name.toLowerCase()
            console.log(symbol)
            return `https://www.coinlore.com/img/25x25/${symbol}.png`
        }
    }

    const getSections = (coin) => {
        const sections = [
            {
                title: 'Market cap',
                data: [coin.market_cap_usd]
            },
            {
                title: 'Volumen 24h',
                data: [coin.volume24]
            },
            {
                title: 'Change 24h',
                data: [coin.percent_change_24h]
            }
        ]
        return sections
    }

    useEffect(() => {
        const { coin } = props.route.params

        props.navigation.setOptions({ title: coin.symbol })
        setCoin(coin)
    })

    console.log(coin)
    return (
        <View style={styles.container}>
            <View style={styles.subHeader}>
                <Image
                    style={styles.iconImg}
                    source={{ uri: getSymbolIcon(coin.name) }}
                />
                <Text style={styles.titleText}>{coin.name}</Text>
            </View>
            <SectionList
                sections={getSections(coin)}
                keyExtractor={(item) => item}
                renderItem={({ item }) =>
                    <View style={styles.sectiomItem}>
                        <Text style={styles.itemText}>{item}</Text>
                    </View>
                }
                renderSectionHeader={({ section }) =>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionText}>{section.title}</Text>
                    </View>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.charade,
        flex: 1
    },
    subHeader: {
        backgroundColor: 'rgba(0,0,0, 0.1)',
        padding: 16,
        flexDirection: 'row'
    },
    titleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.white,
        marginLeft: 8

    },
    iconImg: {
        width: 25,
        height: 25
    },
    sectionHeader: {
        backgroundColor: 'rgba(0,0,0, 0.2)',
        padding: 8,
    },
    sectiomItem: {
        padding: 8
    },
    itemText: {
        color: colors.white,
        fontSize: 14,
    },
    sectionText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: 'bold'
    }
})