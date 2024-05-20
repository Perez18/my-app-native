import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const style = StyleSheet.create({
    text: {
        fontSize: 12,
        color: theme.colors.textPrimary
    },
    bold: {
        fontWeight: theme.fontWeights.bold
    },
    colorPrimary: {
        color: theme.colors.primary
    },
    colorSecondary: {
        color: theme.colors.textSecondary
    },
    big: {
        fontSize: 20
    },
    small: {
        fontSize: 10
    },
    subheading:{
        fontSize:theme.fontSize.subheading
    }
})


const StyleText = ({
    children,
    color,
    bold,
    big,
    small
}) => {

    const textStyle = [
        style.text,
        color === 'primary' && style.colorPrimary,
        color === 'secondary' && style.colorSecondary,
        big && style.big,
        big && style.small
    ]
    return (
        <Text style={textStyle}>
            {children}
        </Text>
    )
}

export default StyleText