import React from 'react';
import Adapter from './Adapter.js'
import { StyleSheet, Text, View, Image } from 'react-native';


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
          dogPics: [...prevState.dogPics, <Image key={uri} source={{ uri }} style={{width: 300, height: 300}} />]
        }
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
        {this.state.dogPics}
      </View>
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
