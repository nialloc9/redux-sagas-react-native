import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';
import styles from './style/user';
import { IRON } from '../common/style/colors';

class User extends PureComponent {

    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        onFetchProfile: PropTypes.func.isRequired,
    };

    handleClick = () => {
        const { id, onFetchProfile, navigation } = this.props;

        onFetchProfile(id);

        navigation.push("Profile")
    };

    render() {
        const { name } = this.props;

        return (
            <TouchableHighlight underlayColor={IRON}>
                <Text style={styles.nameBlock} onPress={this.handleClick}>
                    {name}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default User;
