import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import theme from '../theme';
import StyleText from './StyleText'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#24292e',
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight + 10,
  },
  scroll: {
    paddingBottom: 10,
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active:{
    color : theme.appBar.textPrimary
  }
});

const AppBarTab = ({
  active,
  children,
  to
}) => {

  const textStyle = [
    styles.text,
    active && styles.active
  ]

  return (
    <Link active to={to} component={TouchableWithoutFeedback} >
      <StyleText fontWeight={'bold'} style={textStyle}>
        {children}
      </StyleText>
    </Link>
  )


}

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTab active to={'/'} >Users</AppBarTab>
        <AppBarTab to={'/sign'} >Sign</AppBarTab>
      </ScrollView>
    </View>
  )
}

export default AppBar
