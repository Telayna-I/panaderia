import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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
