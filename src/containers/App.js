import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetch as onFetchUsers } from '../actions/users';
import User from '../components/User';
import styles from './styles/app';

class App extends Component {

    componentDidMount(){
        const { onFetchUsers } = this.props;
        onFetchUsers();
    };

    render() {

        const { data } = this.props;

        return (
            <View style={styles.container}>
                {
                    data.map(o => <User key={o.id} {...o} />)
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
            onFetchUsers
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(App);
