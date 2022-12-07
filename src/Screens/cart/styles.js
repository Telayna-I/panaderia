import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1,
        // backgroundColor: colors.gray,
    },
    footer: {
        borderTopWidth: 1,
        borderColor: colors.gray,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
    },
    buttonConfirm: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textButtonConfirm: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    totalContainer: {
        flex: 0.3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textTotalTitle: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
    },
    textTotal: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
    },
});
