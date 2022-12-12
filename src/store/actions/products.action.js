import { productsTypes } from '../types';

const { FILTER_PRODUCT, SELECT_PRODUCT } = productsTypes;

export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id,
});

export const filterProducts = (id) => ({
    type: FILTER_PRODUCT,
    productId: id,
});
