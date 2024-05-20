import { Platform } from "react-native"

const theme = {
    appBar: {
        textSecondary: '#888',
        textPrimary: '#fff'
    },
    colors: {
        white: '#fff',
        danger: 'red',
        primary: '#0366d6',
        textPrimary: '#24292e',
        textSecondary: '#586069',
    },
    fontSize: {
        body: 14,
        subheading: 16
    },
    fonts: {
        main: Platform.select({
            android: 'Arial',
            ios: '  Roboto',
            default: 'System'
        })
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}

export default theme