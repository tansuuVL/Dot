import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useProducts } from '../../contexts/ProductsContext';
import MySpinner from '../../shared/MySpinner';
import ProductsList from '../Products/ProductsList';

const Content = () => {
    const { fetchProducts, loading, error, products } = useProducts();

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <Grid item md={9}>
            {loading && <MySpinner size={50} />}
            {!loading && error && <h2>{error}</h2>}
            {!loading && products.length > 0 && <ProductsList products={products} />}
        </Grid>
    );
};

export default Content;
