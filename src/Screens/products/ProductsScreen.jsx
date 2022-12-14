import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import { selectProduct } from '../../store/actions';
import { filterProducts } from '../../store/actions';

const ProductsScreen = ({ navigation }) => {
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    // console.warn(filteredProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(filterProducts(category.id));
    }, []);

    const onSelected = (item) => {
        dispatch(selectProduct(item.id));
        navigation.navigate('Product', {
            title: item.title,
        });
    };

    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} color={category.color} />
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
