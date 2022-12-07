import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { colors } from '../../constants/themes/colors';
const CategoryItem = ({ item, onSelected }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={{ ...styles.contentContainer, backgroundColor: item.color }}
                onPress={() => onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryItem;
