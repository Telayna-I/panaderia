import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';
import { PRODUCTS } from '../../constants/data/index';
import ProductItem from '../../components/ProductItem/ProductItem';

const ProductsScreen = ({ navigation, route }) => {
    const { categoryId, color } = route.params;
    const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);
    const onSelected = (item) => {
        navigation.navigate('Product', {
            title: item.title,
            productId: item.id,
        });
    };
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} color={color} />
    );
    return (
        <FlatList
            data={filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            // style={styles.containerList}
        />
    );
};

export default ProductsScreen;
