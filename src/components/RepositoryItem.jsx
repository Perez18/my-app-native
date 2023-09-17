import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import RepositoryStat from './RepositoryStat'

const RepositoryItem = props => {
  return (
    <View key={props.id} style={style.container}>
      <Image
        style={style.img}
        source={{
          uri: props.ownerAvatarUrl
        }}
      />
      <Text style={style.strong}>{props.fullName}</Text>
          <Text>{props.description}</Text>
          <Text>{props.language}</Text>
          <RepositoryStat {...props} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex:1,
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
