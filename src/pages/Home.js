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
import {fetchList, fetchMore} from '../actions/HomeAction';
import Item from "./Item";
import {myconnect} from '../test';

const TAG = "Home:";
class Home extends Component {
  constructor(props) {
    super(props);
    console.log(TAG + this.props);
    myconnect();
  }

  componentDidMount() {
    let props = this.props;
    for (p in props) {
      console.log("props=" + p);
      for (pr in p.home) {
        console.log("pr=" + pr);
      }
    }
    this.props.fetchListAction();
    // this.props.dispatch(fetchList(0, 6));
  }

  _onPressItem = (id) => {
    this.props.navigation.navigate('NewsDetail', {id: id});
  };
  _fetchMore = () => {
    let lastStart = this.props.moves.start;
    let count = this.props.moves.count;
    let start = lastStart + count;
    this.props.fetchMore(start, 6);
  };
  _keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.moves.subjects}
          numColumns={3}
          refreshing={false}
          keyExtractor={this._keyExtractor}
          renderItem={({item}) => {
            return (<Item
              title={item.title}
              image={item.images.medium}
              stars={item.rating.stars}
              onPress={() => navigate('Detail', {
                id: item.id,
                callback: (data) => {
                  this.setState({
                    childState: data
                  })
                }
              })
                // this._onPressItem.bind(this, item.id);
              }
            />)
          }
          }
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
    moves: state.home.data,
  }),
  dispatch => bindActionCreators({fetchListAction: fetchList, fetchMore}, dispatch),
)(Home);