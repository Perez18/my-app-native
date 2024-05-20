import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
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
    subheading: {
        fontSize: theme.fontSize.subheading
    },
    textAlignCenter: {
        textAlign: 'center'
    }
})


const StyleText = ({
    children,
    align,
    color,
    fontWeight,
    fontSize,
    style
}) => {

    const textStyle = [
        styles.text,
        align === 'center' && style.textAlignCenter,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style
    ]
    return (
        <Text style={textStyle}>
            {children}
        </Text>
    )
}

export default StyleText