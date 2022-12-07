import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor: colors.white,
    },
    title: {
        fontFamily: 'Poppins-Light',
    },
    buttonContainer: {
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 4,
        backgroundColor: colors.primary,
    },
});
