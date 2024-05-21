import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 12,
        color: theme.colors.textPrimary,
        marginBottom: 4
    },
    error: {
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 12,
        color: theme.colors.textPrimary,
        marginBottom: 4,
        borderColor: 'red'
    }
})


const StyleTextInput = ({
    children,
    error,
    ...rest
}) => {
    const stylesError = !error
        ? styles.textInput
        : styles.error

    return (
        <TextInput style={stylesError} {...rest}>
            {children}
        </TextInput>
    )
}

export default StyleTextInput