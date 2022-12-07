import { StyleSheet } from 'react-native';
import { colors } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 110,
        backgroundColor: colors.primary,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    headerContainer: {},
    header: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: colors.whiteText,
        marginBottom: 5,
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        flex: 1,
    },
    quantity: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        marginBottom: 5,
        color: colors.whiteText,
    },
    price: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        marginVertical: 5,
        color: colors.whiteText,
    },
});
