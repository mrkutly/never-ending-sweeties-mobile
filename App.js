import React from 'react';
import Adapter from './Adapter.js'
import { StyleSheet, Text, ScrollView, Image } from 'react-native';


export default class App extends React.Component {

  state = {
    dogPics: []
  }

  componentDidMount() {
    this.appendPic()
  }

  appendPic = () => {
    Adapter.get().then(uri => {
      this.setState(prevState => {
        return {
          dogPics: [...prevState.dogPics, uri]
        }
      })
    })
  }

  mappedPics = () => {
    return this.state.dogPics.map(uri => {
      return <Image key={uri} source={{ uri }} style={{width: 300, height: 300}} />
    })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} onScroll={this.handleScroll} scrollEventThrottle={500}>
        <Text>Hello</Text>
        {this.mappedPics()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
