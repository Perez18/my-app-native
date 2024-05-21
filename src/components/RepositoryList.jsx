import React, { useEffect, useState } from 'react'
import {View, Text,FlatList, SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
const RepositoryList = () => {
  const { repositories, loading,error } = useRepositories();

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text>
          Error: {error.message}
        </Text>
      </View>
    );
  }

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
