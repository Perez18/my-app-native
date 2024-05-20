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
        padding:10
    }
})


const StyleTextInput = ({
    children,
    ...rest
}) => {
    return (
        <TextInput style={styles.textInput} {...rest}>
            {children}
        </TextInput>
    )
}

export default StyleTextInput