import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styles from './styles/app';

class Profile extends PureComponent {

    static navigationOptions = {
        title: 'Profile',
    };

    handleBackClick = () => {
        const { navigation: { push } } = this.props;

        push("Home")
    };

    render() {
        const { data, navigation } = this.props;

        if(!data){
            return(
                <View style={styles.container}>
                    <Button onPress={this.handleBackClick} title="Back"/>
                </View>
            )
        }

        return (
            <View style={styles.container}>
                <Text>{data.address.city}</Text>
                <Button onPress={this.handleBackClick} title="Back"/>
            </View>
        );
    }
}

/**
 *
 * @param error
 * @param loading
 * @param data
 */
const mapStateToProps = ({
                             profile: {
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
        {},
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
