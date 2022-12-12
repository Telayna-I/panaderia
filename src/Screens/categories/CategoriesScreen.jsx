import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions';
import { styles } from './styles';

const CetegoriesScreen = ({ navigation }) => {
    const categories = useSelector((state) => state.category.categories);
    const dispatch = useDispatch();
    const onSelected = (item) => {
        dispatch(selectCategory(item.id));
        navigation.navigate('Products', {
            title: item.title,
            color: item.color,
        });
    };

    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
    return (
        <SafeAreaView>
            <FlatList
                data={categories}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                style={styles.containerList}
            />
        </SafeAreaView>
    );
};

export default CetegoriesScreen;
