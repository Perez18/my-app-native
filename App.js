import React from 'react'
import Main from "./src/components/Main.jsx";
import { NativeRouter } from 'react-router-native'
import { StatusBar } from 'expo-status-bar'
import createApolloCliente from './src/utils/apolloClient.js'
import { ApolloProvider } from '@apollo/client'
const apolloClient = createApolloCliente()
export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style='light' />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )

};

