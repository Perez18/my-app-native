import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';

const style = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  text: {
    color: theme.colors.white
  }
});

const AppBarTab = ({
  active,
  children,
  to
}) => {

  return (
    <Link active to={to} >
      <Text style={style.text}>
        {children}
      </Text>
    </Link>
  )


}

const AppBar = () => {
  return (
    <View style={style.container}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        <AppBarTab to={'/'} >Users</AppBarTab>
        <AppBarTab to={'/sign'} >Sign</AppBarTab>
    
      </View>
    </View>
  )
}

export default AppBar
