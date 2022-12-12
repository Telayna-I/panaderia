import { productsTypes } from '../types';

const { FILTER_PRODUCT, SELECT_PRODUCT } = productsTypes;

const initialState = {
    products: [],
    filteredProducts: [],
    selected: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT:
            return {
                ...state,
                selected: state.products.find((product) => product.id === action.productId),
            };
        case FILTER_PRODUCT:
            return {
                ...state,
                filteredProducts: state.products.filter(
                    (product) => product.categoryId === action.categoryId
                ),
            };
        default:
            return state;
    }
};

export default productReducer;
