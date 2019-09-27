/**
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  View,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import {smallHtmlContent, largeHtmlContent} from './content';

const App: () => React$Node = () => {
  const [isLarge, setIsLarge] = useState(false);
  const [height, setHeight] = useState(270)
  return (
    <View style={styles.container}>
      <Text style={styles.bigTitle}>{isLarge ? 'Behaviour with large content (right)' : 'Behaviour with small content (wrong)'}</Text>
      <View style={styles.innerContainer}>
        <View style={styles.header}>
          <Text style={styles.title}>HEADER</Text>
        </View>
          <AutoHeightWebView
            source={{html: isLarge ? largeHtmlContent : smallHtmlContent}}
            style={styles.webview}
            containerStyle={{ flex: 0 }}
            customStyle={`body{background-color: yellow;}`}
          />
        <View style={styles.footer}>
          <Text style={styles.title}>FOOTER</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsLarge(value => !value)}>
        <Text style={styles.label}>
          {isLarge ? 'show small content' : 'show large content'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    height: 350,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    height: 30,
    width: '100%',
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webview: {
    flex: 0,
    width: Dimensions.get('window').width - 120,
    maxHeight: 270,
  },
  title: {
    fontWeight: 'bold',
  },
  bigTitle: {
    marginBottom: 20,
    color: 'white',
    fontSize: 20
  },
  button: {
    backgroundColor: 'white',
    width: 180,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    borderRadius: 5,
  },
  label: {
    color: 'red',
  },
});

export default App;
