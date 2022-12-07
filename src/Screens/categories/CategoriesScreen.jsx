import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { CATEGORIES } from '../../constants/data/index';
import { colors } from '../../constants/themes/colors';
import { styles } from './styles';

const CetegoriesScreen = ({ navigation }) => {
    const onSelected = (item) => {
        navigation.navigate('Products', {
            categoryId: item.id,
            title: item.title,
            color: item.color,
        });
    };

    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    return (
        <SafeAreaView>
            <FlatList
                data={CATEGORIES}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default CetegoriesScreen;
