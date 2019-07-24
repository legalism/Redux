/**
 * Created by pm on 17-7-17.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity,} from 'react-native';

const TAG="Me:";
export default class Me extends Component {
  constructor(props) {
    super(props);
    console.log(TAG+this.props);
  }


    render() {
        const navigate = this.props.navigation.navigate;
        return (
          <TouchableOpacity
            onPress={() => {
              navigate('Setting',{});
              console.log("hello")
            }}>
              <Image source={require("../../images/mode.png")}/>
              <Text style={{}}>我的</Text>
          </TouchableOpacity>
        );
    }
}