import React from 'react';
import {View} from 'react-native';
import {DefaultButton, Typography} from '../../components';
import {goToScreen} from '../../navigation/controls';
import styles from './styles';

const gotoExperimentalScreen = () => {
    goToScreen('Experimental');
};

const HomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Typography>Home Screen</Typography>
            <DefaultButton
                text="Go to Experimental Screen"
                onPress={gotoExperimentalScreen}
            />
        </View>
    );
};

export default HomeScreen;
