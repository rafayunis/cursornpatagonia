import React from 'react';
import {View} from 'react-native';

import {DefaultButton, Separator, Typography} from '../../components';
import styles from './styles';

import {replaceRoute} from '../../navigation/controls';

// @ts-ignore
const WelcomeScreen = () => {
    return (
        <View style={styles.mainContainer}>
            <Typography size={20} variant="medium">
                Welcome Screen
            </Typography>
            <Separator size={15} />
            <DefaultButton
                text="Go To Experimental Screen"
                textSize={16}
                onPress={() => replaceRoute('Experimental')}
            />
            <Separator size={15} />
            <DefaultButton
                text="Go to Tabs"
                textSize={16}
                onPress={() => replaceRoute('TabNavigator')}
            />
        </View>
    );
};

export default WelcomeScreen;
