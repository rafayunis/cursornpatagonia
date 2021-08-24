import React from 'react';
import {View} from 'react-native';
import {DefaultButton, Separator, Typography} from '../../components';
import styles from './styles';
import {goBack, resetNavigation} from '../../navigation/controls';

const HistoryScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Typography>History screen</Typography>
            <Separator size={10} />
            <DefaultButton text="Go back" onPress={goBack} />
            <DefaultButton text="log out" onPress={resetNavigation} />
        </View>
    );
};

export default HistoryScreen;
