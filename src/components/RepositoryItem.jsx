import React from 'react'
import { View, Text, StyleSheet, Image, Platform } from 'react-native'
import RepositoryStat from './RepositoryStat'
import StyleText from './StyleText'
import theme from '../theme'

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingBottom: 4
      }}
    >
      <Image
        style={style.img}
        source={{
          uri: ownerAvatarUrl
        }}
      />
      <View style={{ paddingLeft: 10 }}>
        <StyleText fontSize='subheading' fontWeight='bold'>{fullName}</StyleText>
        <StyleText >{description}</StyleText>
        <StyleText style={style.lenguage}>{language}</StyleText>
      </View>
    </View>
  )
}

const RepositoryItem = props => {
  return (
    <View key={props.id} style={style.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStat {...props} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 5,
    marginVertical: 8
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 10
  },
  strong: {
    fontSize: 17,
    color: 'black',
    fontWeight: 'bold'
  },
  lenguage: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: Platform.select({
      android: theme.colors.primary,
      ios: theme.colors.danger
    }

    ),
    alignSelf: 'flex-start',
    borderRadius: 5,
    overflow: 'hidden'
  }
})

export default RepositoryItem
