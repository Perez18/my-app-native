import React from 'react';
import { Routes, Route } from 'react-router-native';
import { View, Text } from 'react-native'
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import Login from './Login';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/sign' element={<Login />} />
      </Routes>
    </View>
  )
};



export default Main
