import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { CartItem } from '../../components';
import { styles } from './styles';
import { CART } from '../../constants/data/cart';

const Cart = ({ navigation }) => {
    const onDelete = () => {
        return null;
    };
    const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <FlatList data={CART} renderItem={renderItem} style={styles.listContainer} />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.buttonConfirm} onPress={() => null}>
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.textTotalTitle}>TOTAL: </Text>
                        <Text style={styles.textTotal}>$ 1400</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Cart;
