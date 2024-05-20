import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import repositorio from '../data/repositorio'
import RepositoryItem from './RepositoryItem'

const RepositoryList = () => {
  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        data={repositorio}
        renderItem={({ item: repo }) => <RepositoryItem {...repo} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  }
});


export default RepositoryList
