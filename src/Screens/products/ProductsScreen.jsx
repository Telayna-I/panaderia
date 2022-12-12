import React, { useEffect } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import { filterProducts } from '../../store/actions';

const ProductsScreen = ({ navigation }) => {
    const category = useSelector((state) => state.category.selected);
    const filteredProducts = useSelector((state) => state.products.filteredProducts);
    const dispatch = useDispatch();

    // const filteredProducts = PRODUCTS.filter((product) => product.categoryId === categoryId);
    const onSelected = (item) => {
        navigation.navigate('Product', {
            title: item.title,
            productId: item.id,
        });
    };
    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected} color={color} />
    );
    useEffect(() => {
        dispatch(filterProducts(category.id));
    }, []);
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
