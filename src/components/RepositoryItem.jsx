import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import RepositoryStat from './RepositoryStat'
import StyleText from './StyleText'

const RepositoryItemHeader = ({
  ownerAvatarUrl,
  fullName,
  description,
  language }) => (
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
    <View style={{ paddingLeft: 10}}>
      <Text style={style.strong}>{fullName}</Text>
      <StyleText>{description}</StyleText>
      <StyleText blue bold>{language}</StyleText>
    </View>
  </View>
)

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
  }
})

export default RepositoryItem
