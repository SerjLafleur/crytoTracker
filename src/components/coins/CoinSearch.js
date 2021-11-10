import React, { useState } from 'react'
import { View, Platform, StyleSheet, TextInput } from 'react-native'
import colors from '../../res/colors'

export const CoinSearch = (props) => {

    const [query, setQuery] = useState('')


    const handleText = (query) => {
        setQuery({ query })

        if (props.onChange) {
            props.onChange(query)
        }
    }
    return (
        <View>
            <TextInput
                style={[styles.textInput,
                Platform.OS == 'ios' ?
                    styles.texInputIOS :
                    styles.textInputAndroid
                ]}
                onChangeText={handleText}
                value={query}
                placeholder='Search coin'
                placeholderTextColor='#fff'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        height: 46,
        backgroundColor: colors.charade,
        paddingLeft: 16,
        color: colors.white
    },
    textInputAndroid: {
        borderBottomWidth: 2,
        borderBottomColor: colors.zircon
    },
    texInputIOS: {
        margin: 8,
        borderRadius: 8
    }
})
