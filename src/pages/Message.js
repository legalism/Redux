/**
 * Created by pm on 17-7-17.
 */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchSoon} from '../actions/MessageAction';
import MessageItem from './MessageItem';

const TAG = "Message:";
class Message extends Component {
  componentWillMount() {
    this.props.execute();
  }

  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.soon}
          refreshing={false}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => {
            return (
              <MessageItem
                data={item}
                onPress={() => navigate('Detail', {
                  id: item.id,
                  callback: (data) => {
                    this.setState({
                      childState: data
                    })
                  }
                })}
              />)
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    paddingHorizontal: 15,
  },
  loading: {
    marginTop: 100,
  }
});

export default connect(
  state => ({
    soon: state.message.data.subjects,
  }),
  dispatch => bindActionCreators({execute: fetchSoon}, dispatch)
)(Message);