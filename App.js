/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    Image,
    TouchableHighlight,
    View
} from 'react-native';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight style={{backgroundColor: '#ccc', marginTop: 10}} onPress={this.onPress}
                                    underlayColor={'#ccc'}
                                    activeOpacity={0.3} onHideUnderlay={this.onHideUnderlay}
                                    onShowUnderlay={this.onShowUnderlay}>
                    <Text style={styles.text}>
                        我是按钮，点击我!
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.onPressImage} activeOpacity={0.4}>
                    <Image style={styles.image} source={require('./images/button.jpg')}/>
                </TouchableHighlight>
            </View>
        );
    }

    onPress() {
        //alert('TouchableHighlight');
    }

    onPressImage() {
        alert('onPressImage');
    }

    onHideUnderlay() {
        alert('onHideUnderlay')
    }

    onShowUnderlay() {
        //alert('onShowUnderlay')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    image: {
        width: 50,
        height: 50
    }
});
