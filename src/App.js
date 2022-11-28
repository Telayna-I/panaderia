import { CategoriesScreen, ProductScreen, ProductsScreen } from './Screens';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';

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

    return <CategoriesScreen />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
