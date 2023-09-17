import React from 'react';
import { Routes, Route } from 'react-router-native';
import { View, Text } from 'react-native'
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const Main = () => {
  return (
    <View>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/sign' element={ <Text>Hola! Signin</Text>} />
      </Routes>
    </View>
  )
};



export default Main
