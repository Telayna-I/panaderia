import { CategoriesScreen, ProductScreen, ProductsScreen } from './screens';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation/Index';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
    const [loaded] = useFonts({
        'Poppins-Black': require('../assets/Fonts/Poppins-Black.ttf'),
        'Poppins-Bold': require('../assets/Fonts/Poppins-Bold.ttf'),
        'Poppins-Italic': require('../assets/Fonts/Poppins-Italic.ttf'),
        'Poppins-Light': require('../assets/Fonts/Poppins-Light.ttf'),
        'Poppins-Regular': require('../assets/Fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#000" />
            </View>
        );
    }
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
