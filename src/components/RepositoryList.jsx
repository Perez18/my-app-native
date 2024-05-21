import React, { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
const RepositoryList = () => {
  const { repositories} = useRepositories();

  return (
    <SafeAreaView styles={styles.container}>
      <FlatList
        data={repositories}
        contentContainerStyle={{ flexGrow: 1 }}
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
