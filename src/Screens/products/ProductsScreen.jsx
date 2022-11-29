import React from 'react';
import { View, Text, Button } from 'react-native';
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';

const ProductsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>ProductsScreen</Text>
            <View style={styles.buttonContainer}>
                <Button
                    style={styles.button}
                    color={colors.whiteText}
                    title="Product"
                    onPress={() => navigation.navigate('Product')}
                />
            </View>
        </View>
    );
};

export default ProductsScreen;
