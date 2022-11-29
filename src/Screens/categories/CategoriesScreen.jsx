import React from 'react';
import { View, Text, Button } from 'react-native';
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';

const CetegoriesScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categories</Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    color={colors.whiteText}
                    title="Products"
                    onPress={() => navigation.navigate('Products')}
                />
            </View>
        </View>
    );
};

export default CetegoriesScreen;
