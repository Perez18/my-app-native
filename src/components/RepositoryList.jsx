import React from 'react'
import { FlatList, SafeAreaView } from 'react-native'
import repositorio from '../data/repositorio'
import RepositoryItem from './RepositoryItem'
const RepositoryList = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={repositorio}
        renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

export default RepositoryList
