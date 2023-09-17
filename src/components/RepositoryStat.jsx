import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const parseEmail = email => {
  if (email.length > 20) {
    return `${email.substring(1, 16)}...`
  }
  return email
}

const RepositoryStat = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
        <View>
          <Text style={style.strong}>Star</Text>
          <Text>{props.stargazersCount}</Text>
        </View>
        <View>
          <Text style={style.strong}>Forks</Text>
          <Text>{parseEmail(props.forksCount)}</Text>
        </View>
        <View>
          <Text style={style.strong}>Review</Text>
          <Text>{props.reviewCount}</Text>
        </View>
        <View>
          <Text style={style.strong}>Rating</Text>
          <Text>{props.ratingAverage}</Text>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding:  10,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: 'black',
    fontWeight: 'bold'
  }
})

export default RepositoryStat
