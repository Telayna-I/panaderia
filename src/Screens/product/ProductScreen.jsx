import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { PRODUCTS } from '../../constants/data/index';

const ProductScreen = ({ navigation }) => {
    const product = useSelector((state) => state.products.selected);

    const { title, price, description, weight } = product || {};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.weight}>weight: {weight}</Text>
            <Text style={styles.price}>${price}</Text>
        </View>
    );
};

export default ProductScreen;
