import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native'
import Constants from 'expo-constants';
import { Link, useLocation } from 'react-router-native';
import theme from '../theme';
import StyleText from './StyleText'
const AppBarTab = ({
    children,
    to
  }) => {
  
    const {pathname} = useLocation();
    const active = pathname === to
  
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

const IOSAppBar = () => {
    return (
        <View style={styles.container}>
          <ScrollView horizontal style={styles.scroll}>
            <AppBarTab to={'/'} >Users</AppBarTab>
            <AppBarTab to={'/sign'} >Sign In</AppBarTab>
          </ScrollView>
        </View>
      )

}


const styles = StyleSheet.create({
    container: {
      backgroundColor: '#c4c0b8',
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
    active: {
      color: theme.appBar.textPrimary
    }
  });

export default IOSAppBar