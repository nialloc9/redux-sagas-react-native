import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch as onFetchUsers } from '../actions/users';
import { fetch as onFetchProfile } from '../actions/profile';
import User from '../components/User';
import styles from './styles/app';

class Home extends Component {

    static navigationOptions = {
        title: 'Home'
    };

    componentDidMount(){
        const { onFetchUsers } = this.props;
        onFetchUsers();
    };

    render() {

        const { data, navigation, onFetchProfile } = this.props;

        return (
            <View style={styles.container}>
                {
                    data.map(o => <User key={o.id} {...o} navigation={navigation} onFetchProfile={onFetchProfile} />)
                }
            </View>
        );
    }
}

/**
 * @param error
 * @param loading
 * @param data
 */
const mapStateToProps = ({
                             users: {
                                 error,
                                 loading,
                                 data
                             }
                         }) => ({
    error,
    loading,
    data
});

/**
 * @param dispatch
 */
const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            onFetchUsers,
            onFetchProfile
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
