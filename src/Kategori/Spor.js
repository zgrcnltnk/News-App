import React, { Component } from 'react';
import { StyleSheet,ImageBackground, ScrollView} from 'react-native';
import {List, ListItem, Content, Text, Right, Left, Image, Thumbnail, Body, Container,View, Button, Card, CardItem, Icon } from 'native-base';
import axios from 'axios';
import NewsView from './NewsView';

class Spor extends Component {
    render() {
        return(
            // <Text>Hello {this.props.name}</Text>
            <Content>
            <NewsView category='sports'/>
            </Content>
        );
    }
}

export default Spor;
