import React from 'react';
import { Routes, Route } from 'react-router-native';
import { View } from 'react-native'
import RepositoryList from './RepositoryList';
import Login from './Login';
import AppBar from './AppBar';

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
