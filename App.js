import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Routes from './src/Navigation/Routes'
import store from './src/redux/store'
import {Provider} from "react-redux"

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
         <Routes/> 
    </Provider>
    )
  }
}

const styles = StyleSheet.create({})
