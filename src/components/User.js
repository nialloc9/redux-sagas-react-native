import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text } from 'react-native';
import styles from './style/user';
import { IRON } from '../common/style/colors';

class User extends PureComponent {

    static propTypes = {
        name: PropTypes.string.isRequired
    };

    render() {
        const { name } = this.props;

        return (
            <TouchableHighlight underlayColor={IRON}>
                <Text style={styles.nameBlock}>
                    {name}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default User;
