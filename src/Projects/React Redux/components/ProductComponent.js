import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Grid container direction="column">
                <Grid item key={id}>
                    <Link to={`/product/${id}`}>
                        <Grid item xs={12} sm={3}>
                            <Card variant="outlined">
                                <CardContent>
                                    <img src={image} alt={title} width='200' height='300' />
                                    <Typography variant='h5'> {title} </Typography>
                                    <Typography variant='h5'>$ {price}</Typography>
                                    <Typography variant='h5'>{category}</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Link>
                </Grid>
            </Grid>
        )
    })
    return <>{renderList}</>;
}

export default ProductComponent;