import { Grid } from '@material-ui/core';
import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ products }) => {
    return (
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid item xs={4} key={product.id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductsList;
