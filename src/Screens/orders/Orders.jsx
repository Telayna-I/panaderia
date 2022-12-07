import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { OrderItem } from '../../components';
import { ORDERS } from '../../constants/data/orders';
import { styles } from './styles';

const Orders = ({ navigation, orders }) => {
    const onDelete = (id) => {
        console.log('delete');
    };
    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
    return (
        <View style={styles.container}>
            <FlatList
                data={ORDERS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

export default Orders;
